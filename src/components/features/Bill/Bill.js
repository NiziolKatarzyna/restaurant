import styles from './Bill.module.scss';
import TextInput from '../../common/TextInput/TextInput';
import { useState, useEffect } from 'react';

const Bill = ({ billAmount, setBillAmount }) => {
  const [localBillAmount, setLocalBillAmount] = useState('0');

  useEffect(() => {
    setLocalBillAmount(billAmount.toString());
  }, [billAmount]);

  const handleBillAmountChange = (e) => {
    setLocalBillAmount(e.target.value);
    setBillAmount(Number(e.target.value));
  };

  return (
    <li className={styles.list}>
      <h3 className={styles.title}>Bill: </h3>
      <span className={styles.span}>$</span>
      <TextInput
        type='number'
        value={localBillAmount}
        onChange={handleBillAmountChange}
      />
    </li>
  );
};

export default Bill;
