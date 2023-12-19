import Button from 'react-bootstrap/Button';

const ButtonTable = (props) => {
  return <Button variant='primary'>{props.children}</Button>;
};

export default ButtonTable;
