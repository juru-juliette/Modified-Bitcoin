import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link, NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import logo from '../img/logo.png';



function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Brand >
          <Link to="/"> 
           <img src={logo} alt="images" className="logoImage"/>
          </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto myNav">
          <NavDropdown title="Introduction" id="nav-dropdown">
          <NavDropdown.Item >Individuals</NavDropdown.Item>
              <NavDropdown.Item >Businesses</NavDropdown.Item>
              <NavDropdown.Item >Developers</NavDropdown.Item>
              <NavDropdown.Item >Getting started </NavDropdown.Item>
              <NavDropdown.Item >How it works</NavDropdown.Item>
              <NavDropdown.Item >White paper</NavDropdown.Item>
          </NavDropdown >
          <NavDropdown title="Resources" id="nav-dropdown">
              <NavDropdown.Item >Resources</NavDropdown.Item>
              <NavDropdown.Item >Exchanges</NavDropdown.Item>
              <NavDropdown.Item >Community </NavDropdown.Item>
              <NavDropdown.Item >Documentation</NavDropdown.Item>
              <NavDropdown.Item >Vocaburary</NavDropdown.Item>
              <NavDropdown.Item >Events</NavDropdown.Item>
              <NavDropdown.Item >Bitcoin Core</NavDropdown.Item>
          </NavDropdown >
            
            <NavLink id="nav-menu">Innovation</NavLink>
            
            <NavDropdown title="Participate" id="nav-dropdown">
              <NavDropdown.Item >Support Bitcoin</NavDropdown.Item>
              <NavDropdown.Item >
                Buy Bitcoin
              </NavDropdown.Item>
              <NavDropdown.Item >Running a full node</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Development
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink id="nav-menu">FAQ</NavLink>
          </Nav>
          <Nav>
            <NavLink  id="nav-menu">English</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    );
  }
  
  export default NavBar;