import styles from './Bill.module.scss';
import TextInput from '../../common/TextInput/TextInput';

const Bill = () => {
  return (
    <li className={styles.list}>
      <h3 className={styles.title}>Bill: </h3>
      <span className={styles.span}>$</span>
      <TextInput />
    </li>
  );
};
export default Bill;
