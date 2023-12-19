import Card from 'react-bootstrap/Card';
const Footer = () => {
  return (
    <Card className='text-center border-0 '>
      <Card.Footer className='text-muted bg-body border-0'>
        Copyright &copy; BlogApp 2022{' '}
      </Card.Footer>
    </Card>
  );
};

export default Footer;
