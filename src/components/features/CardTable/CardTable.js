import styles from './CardTable.module.scss';
import ButtonTable from '../../common/Button/ButtonTable';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CardTable = (props) => {
  return (
    <li className={styles.list}>
      <h2 className={styles.title}>Table: {props.tableId}</h2>
      <span className={styles.status}>Status: {props.status} </span>
      <ButtonTable as={NavLink} to={`/table/${props.tableId}`}>
        <span>Show More</span>
      </ButtonTable>
    </li>
  );
};
export default CardTable;
