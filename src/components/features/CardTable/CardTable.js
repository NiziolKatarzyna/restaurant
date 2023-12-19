import styles from './CardTable.module.scss';
import ButtonTable from '../../common/Button/Button';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CardTable = (props) => {
  return (
    <li className={styles.list}>
      <h2 className={styles.title}>Table: {props.tableId}</h2>
      <span className={styles.status}>Status: {props.status} </span>
      <Button as={NavLink} to={`/table/${props.tableId}`}>
        <span>Show More</span>
      </Button>
    </li>
  );
};
export default CardTable;
