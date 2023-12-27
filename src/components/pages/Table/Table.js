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
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Table = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const tableId = parseInt(id);

  const table = useSelector((state) => getTableById(state, tableId));
  const currentStatus = table ? table.status : '1';
  console.log('aktualny status', currentStatus);

  const handleStatusChange = (newStatus) => {
    dispatch(updateTableStatus(table.id, newStatus));
  };

  const handleUpdate = () => {
    dispatch(updateTableStatus(table.id, currentStatus));
  };
  if (!table) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className={styles.title}>Table: {table.id}</h2>
      <ul className={styles.list}>
        <Status status={currentStatus} onStatusChange={handleStatusChange} />
        <PeopleAmount amount={table.peopleAmount} />
        <Bill bill={table.bill} />
        <ButtonTable as={NavLink} to={'/'} onClick={handleUpdate}>
          <span>Update</span>
        </ButtonTable>
      </ul>
    </div>
  );
};

export default Table;
