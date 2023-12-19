import styles from './ListsTables.module.scss';
import CardTable from '../CardTable/CardTable';
const ListsTables = () => {
  return (
    <article>
      <h2 className={styles.title}>All Tables</h2>
      <ul className={styles.list}>
        <CardTable />
      </ul>
    </article>
  );
};
export default ListsTables;
