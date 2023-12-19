import styles from './Table.module.scss';
import ButtonTable from '../../common/Button/Button';
import Bill from '../../features/Bill/Bill';
import PeopleAmount from '../../features/PeopleAmount/PeopleAmount';
import Status from '../../features/Status/Status';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getTableById, fetchTables } from '../../../redux/tablesRedux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const Table = () => {
  return (
    <div>
      <h2 className={styles.title}>Table:</h2>
      <ul className={styles.list}>
        <Status />
        <PeopleAmount />
        <Bill />
        <ButtonTable>
          <span>Update</span>
        </ButtonTable>
      </ul>
    </div>
  );
};

export default Table;
