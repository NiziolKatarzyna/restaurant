import styles from './PeopleAmount.module.scss';
import TextInput from '../../common/TextInput/TextInput';

const PeopleAmount = () => {
  return (
    <li className={styles.list}>
      <h3 className={styles.title}>People: </h3>
      <TextInput />
      <span className={styles.span}>/</span>
      <TextInput />
    </li>
  );
};
export default PeopleAmount;
