import styles from './Status.module.scss';
import Form from 'react-bootstrap/Form';

const Status = ({ status, onStatusChange }) => {
  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    const newStatusLabel = e.target.options[e.target.selectedIndex].text;

    onStatusChange(newStatusLabel);
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
        <option value='1'>Free</option>
        <option value='2'>Busy</option>
        <option value='3'>Reserved</option>
        <option value='4'>Cleaning</option>
      </Form.Select>
    </li>
  );
};

export default Status;
