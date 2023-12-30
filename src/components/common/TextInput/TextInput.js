import styles from './TextInput.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
const TextInput = (props) => {
  const { value, onChange } = props;
  return (
    <input
      className={styles.input}
      type='number'
      value={value}
      onChange={onChange}
    />
  );
};
export default TextInput;
