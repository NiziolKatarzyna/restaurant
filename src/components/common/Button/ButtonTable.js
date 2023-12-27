import Button from 'react-bootstrap/Button';

const ButtonTable = (props) => {
  // Destructure children and spread the rest of the props
  const { children, ...otherProps } = props;

  return (
    <Button variant='primary' {...otherProps}>
      {children}
    </Button>
  );
};

export default ButtonTable;
