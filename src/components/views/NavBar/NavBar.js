import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <Navbar className={styles.navBar} bg='primary'>
      <Container>
        <Navbar.Brand className='text-light'>Navbar</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link
            className='text-light position-absolute top-50 end-0 translate-middle-y p-2'
            as={NavLink}
            to='/'
          >
            Home
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
