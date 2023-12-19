import styles from './ListsTables.module.scss';
import CardTable from '../CardTable/CardTable';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import { getAllTables } from '../../../redux/tablesRedux';
const ListsTables = () => {
  const allTables = useSelector(getAllTables);
  return (
    <article>
      <h2 className={styles.title}>All Tables</h2>
      <ul className={styles.list}>
        {allTables.map((table) => (
          <CardTable key={table.id} tableId={table.id} status={table.status} />
        ))}
      </ul>
    </article>
  );
};
export default ListsTables;
