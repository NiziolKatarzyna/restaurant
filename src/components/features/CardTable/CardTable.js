import styles from './CardTable.module.scss';
import ButtonTable from '../../common/Button/Button';
import { NavLink } from 'react-router-dom';
import { getTableById } from '../../../redux/tablesRedux';
const CardTable = () => {
  return (
    <li className={styles.list}>
      <h2 className={styles.title}>Table:</h2>
      <span className={styles.status}>Status:</span>
      <ButtonTable as={NavLink} to='/table/:id'>
        <span>Show More</span>
      </ButtonTable>
    </li>
  );
};
export default CardTable;
