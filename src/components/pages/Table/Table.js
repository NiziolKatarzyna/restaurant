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
import { updatePeopleAmount } from '../../../redux/tablesRedux';

const Table = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const tableId = parseInt(id);
  const table = useSelector((state) => getTableById(state, tableId));

  const [tempStatus, setTempStatus] = useState(table ? table.status : 'Free');

  useEffect(() => {
    if (table) {
      setTempStatus(table.status);
    }
  }, [table]);

  const handleStatusChange = (newStatus) => {
    setTempStatus(newStatus);
  };

  const handleUpdate = () => {
    dispatch(updateTableStatus(table.id, tempStatus));
  };

  if (!table) {
    return <div>Loading...</div>;
  }

  // Warunkowe renderowanie komponentów PeopleAmount i Bill
  const showPeopleAmount = true; // Zawsze pokazuj PeopleAmount
  const showBill = tempStatus === 'Busy';

  return (
    <div>
      <h2 className={styles.title}>Table: {table.id}</h2>
      <ul className={styles.list}>
        <Status status={tempStatus} onStatusChange={handleStatusChange} />
        {showPeopleAmount && (
          <PeopleAmount table={table} tempStatus={tempStatus} />
        )}
        {showBill && <Bill bill={table.bill} />}
        <ButtonTable as={NavLink} to={'/'} onClick={handleUpdate}>
          <span>Update</span>
        </ButtonTable>
      </ul>
    </div>
  );
};

export default Table;
