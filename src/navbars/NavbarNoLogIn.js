import React from "react";
import { Link } from "react-router-dom";
import {Navbar,Nav,Container, NavDropdown, Offcanvas} from 'react-bootstrap'
import logo from './Cratos.svg';

function NavbarNoLogin() {
  return (
    <div>
      <>
        {['sm'].map((expand) => (
          <Navbar key={expand} bg="light" variant="light" expand={expand} className="mb-3">
            <Container fluid>
            <Navbar.Brand href="/">
               <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            Cratos
            </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavDropdown
                      title="Login/SignUp"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">Login/Signup as a Food Bank</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">Login/Signup as a Restaurant</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#action1">About Us</Nav.Link>
                    <Nav.Link href="#action2">Contact</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    </div>
  );
}

export default NavbarNoLogin;