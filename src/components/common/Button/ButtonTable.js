import Button from 'react-bootstrap/Button';

const ButtonTable = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Button variant='primary' {...otherProps}>
      {children}
    </Button>
  );
};

export default ButtonTable;
