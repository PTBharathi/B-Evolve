import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import  'react-bootstrap';
import Logo from '../Navigation/Evolve Logo.png'
import './NavigationStyle.css'

function Navigation() {
  return (
    <Navbar expand="lg" id="nav" className="Navigation">
      <Container>
        <div className="row">
        <Navbar.Brand href="#home" className="col-10"><img src={Logo} style={{height:80, width:150}}/></Navbar.Brand></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav row">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="col-2">Home</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown" className="col-1.5 nav-link">
              <NavDropdown.Item href="#edu">Educe</NavDropdown.Item>
              <NavDropdown.Item href="#coll">College</NavDropdown.Item>
              <NavDropdown.Item href="#corp">Corporate</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#humanology" className="col-2">Humanology</Nav.Link>
            <Nav.Link href="#school" className="col-2">School</Nav.Link>
            <Nav.Link href="#college" className="col-2">College</Nav.Link>
            <Nav.Link href="#corporate" className="col-2">Corporate</Nav.Link>
            <Nav.Link href="#Contact" className="col-2">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;