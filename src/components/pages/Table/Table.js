import styles from './Table.module.scss';
import ButtonTable from '../../common/Button/Button';
import Bill from '../../features/Bill/Bill';
import PeopleAmount from '../../features/PeopleAmount/PeopleAmount';
const Table = () => {
  return (
    <div>
      <h2 className={styles.title}>Table:</h2>
      <ul className={styles.list}>
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
