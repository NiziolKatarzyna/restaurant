import styles from './Status.module.scss';
import Form from 'react-bootstrap/Form';

const Status = () => {
  return (
    <li className={styles.list}>
      <h3 className={styles.title}>Status: </h3>
      <Form.Select aria-label='Default select example' className={styles.label}>
        <option value='1'>Free</option>
        <option value='2'>Busy</option>
        <option value='3'>Reserved</option>
        <option value='4'>Cleaning</option>
      </Form.Select>
    </li>
  );
};
export default Status;
