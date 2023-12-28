import styles from './Status.module.scss';
import Form from 'react-bootstrap/Form';

const Status = ({ status, onStatusChange }) => {
  const handleStatusChange = (e) => {
    const newStatus = e.target.value;

    onStatusChange(newStatus);
  };

  return (
    <li className={styles.list}>
      <h3 className={styles.title}>Status: </h3>
      <Form.Select
        aria-label='Default select example'
        className={styles.label}
        value={status}
        onChange={handleStatusChange}
      >
        <option value='Free'>Free</option>
        <option value='Busy'>Busy</option>
        <option value='Reserved'>Reserved</option>
        <option value='Cleaning'>Cleaning</option>
      </Form.Select>
    </li>
  );
};

export default Status;
