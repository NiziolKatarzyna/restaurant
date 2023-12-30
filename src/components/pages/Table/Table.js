import styles from './Table.module.scss';
import ButtonTable from '../../common/Button/ButtonTable';
import Bill from '../../features/Bill/Bill';
import PeopleAmount from '../../features/PeopleAmount/PeopleAmount';
import Status from '../../features/Status/Status';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getTableById } from '../../../redux/tablesRedux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTableStatus } from '../../../redux/tablesRedux';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  updatePeopleAmount,
  updateBillAmount,
} from '../../../redux/tablesRedux';

const Table = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const tableId = parseInt(id);
  const table = useSelector((state) => getTableById(state, tableId));

  const [tempStatus, setTempStatus] = useState(table ? table.status : 'Free');
  const [tempPeopleAmount, setTempPeopleAmount] = useState('0');
  const [tempMaxPeopleAmount, setTempMaxPeopleAmount] = useState('0');
  const [billAmount, setBillAmount] = useState(0);

  useEffect(() => {
    if (table) {
      setTempStatus(table.status);
      setTempPeopleAmount(table.peopleAmount);
      setTempMaxPeopleAmount(table.maxPeopleAmount);
      setBillAmount(table.bill || 0);
    }
  }, [table]);

  const handleStatusChange = (newStatus) => {
    setTempStatus(newStatus);

    if (newStatus !== 'Busy') {
      setTempPeopleAmount('0');
      setTempMaxPeopleAmount('0');
      setBillAmount(0);
    }
  };

  const handleUpdate = () => {
    dispatch(updateTableStatus(tableId, tempStatus));
    dispatch(
      updatePeopleAmount(tableId, tempPeopleAmount, tempMaxPeopleAmount)
    );
    dispatch(updateBillAmount(tableId, billAmount));
  };

  if (!table) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className={styles.title}>Table: {table.id}</h2>
      <ul className={styles.list}>
        <Status status={tempStatus} onStatusChange={handleStatusChange} />
        <PeopleAmount
          table={table}
          tempStatus={tempStatus}
          tempPeopleAmount={tempPeopleAmount}
          tempMaxPeopleAmount={tempMaxPeopleAmount}
          setTempPeopleAmount={setTempPeopleAmount}
          setTempMaxPeopleAmount={setTempMaxPeopleAmount}
        />
        {tempStatus === 'Busy' && (
          <Bill billAmount={billAmount} setBillAmount={setBillAmount} />
        )}
        <ButtonTable as={NavLink} to={'/'} onClick={handleUpdate}>
          <span>Update</span>
        </ButtonTable>
      </ul>
    </div>
  );
};

export default Table;
