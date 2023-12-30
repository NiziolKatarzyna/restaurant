import styles from './PeopleAmount.module.scss';
import TextInput from '../../common/TextInput/TextInput';
import { useState } from 'react';
import { useEffect } from 'react';

const PeopleAmount = ({
  table,
  tempStatus,
  setTempPeopleAmount,
  setTempMaxPeopleAmount,
}) => {
  const [localTempPeopleAmount, setLocalTempPeopleAmount] = useState('0');
  const [localTempMaxPeopleAmount, setLocalTempMaxPeopleAmount] = useState('0');

  useEffect(() => {
    if (table && tempStatus === 'Busy') {
      setLocalTempPeopleAmount(table.peopleAmount.toString());
      setLocalTempMaxPeopleAmount(table.maxPeopleAmount.toString());
    } else {
      setLocalTempPeopleAmount('0');
      setLocalTempMaxPeopleAmount('0');
    }
  }, [table, tempStatus]);

  const handlePeopleAmountChange = (e) => {
    const newValue = Math.max(0, Math.min(10, Number(e.target.value)));
    setLocalTempPeopleAmount(newValue.toString());
    setTempPeopleAmount(newValue.toString());

    if (newValue > Number(localTempMaxPeopleAmount)) {
      setLocalTempMaxPeopleAmount(newValue.toString());
      setTempMaxPeopleAmount(newValue.toString());
    }
  };

  const handleMaxPeopleAmountChange = (e) => {
    const newValue = Math.max(0, Math.min(10, Number(e.target.value)));
    if (newValue < Number(localTempPeopleAmount)) {
      setLocalTempMaxPeopleAmount(localTempPeopleAmount);
      setTempMaxPeopleAmount(localTempPeopleAmount);
    } else {
      setLocalTempMaxPeopleAmount(newValue.toString());
      setTempMaxPeopleAmount(newValue.toString());
    }
  };

  return (
    <li className={styles.list}>
      <h3 className={styles.title}>People: </h3>
      <TextInput
        type='number'
        value={localTempPeopleAmount}
        onChange={handlePeopleAmountChange}
      />
      <span className={styles.span}>/</span>
      <TextInput
        type='number'
        value={localTempMaxPeopleAmount}
        onChange={handleMaxPeopleAmountChange}
      />
    </li>
  );
};

export default PeopleAmount;
