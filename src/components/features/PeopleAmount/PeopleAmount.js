import styles from './PeopleAmount.module.scss';
import TextInput from '../../common/TextInput/TextInput';
import { useState } from 'react';
import { useEffect } from 'react';

const PeopleAmount = ({ table, tempStatus }) => {
  const [tempPeopleAmount, setTempPeopleAmount] = useState('0');
  const [tempMaxPeopleAmount, setTempMaxPeopleAmount] = useState('0');

  useEffect(() => {
    if (table && tempStatus === 'Busy') {
      setTempPeopleAmount(table.peopleAmount);
      setTempMaxPeopleAmount(table.maxPeopleAmount);
    } else {
      setTempPeopleAmount('0');
      setTempMaxPeopleAmount('0');
    }
  }, [table, tempStatus]);

  return (
    <li className={styles.list}>
      <h3 className={styles.title}>People: </h3>
      <TextInput
        type='number'
        value={tempPeopleAmount}
        onChange={(newPeopleAmount) => setTempPeopleAmount(newPeopleAmount)}
      />
      <span className={styles.span}>/</span>
      <TextInput
        type='number'
        value={tempMaxPeopleAmount}
        onChange={(newMaxPeopleAmount) =>
          setTempMaxPeopleAmount(newMaxPeopleAmount)
        }
      />
    </li>
  );
};

export default PeopleAmount;
