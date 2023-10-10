import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
  return (
    <Navbar expand="lg" className="navbg">
      <Container>
        <Navbar.Brand className='navtext logo' as={Link} to="/">Sportfusion</Navbar.Brand>
        <Navbar.Toggle className='ham' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown className='navtext test'  title="Fotboll" id="basic-nav-dropdown">
              <NavDropdown.Item className='navtext drop '  as={Link} to="/allsvenskan">Allsvenskan</NavDropdown.Item>
              <NavDropdown.Item className='navtext drop'  as={Link} to="/superettan">Superettan</NavDropdown.Item>
              <NavDropdown.Item className='navtext drop'  as={Link} to="/damallsvenskan">Damallsvenskan</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='navtext'  title="Innebandy" id="basic-nav-dropdown">
              <NavDropdown.Item className='navtext drop '   as={Link} to="/superligan">Superligan</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Ishockey" id="basic-nav-dropdown">
              <NavDropdown.Item className='navtext drop'   as={Link} to="/shl">SHL</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;