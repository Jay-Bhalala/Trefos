import React from "react";
import {Navbar,Nav,Container, NavDropdown, Offcanvas} from 'react-bootstrap'
import logo from './Cratos.svg';

function NavbarNoLogIn() {
  return (
    <div>
      <>
        {['sm'].map((expand) => (
          <Navbar key={expand} bg="light" variant="light" expand={expand} className="mb-3">
            <Container fluid>
            <Navbar.Brand href="/nologin/home">
               <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Cratos
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavDropdown
                      title="Login/SignUp"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="/nologin/loginsignupfoodbank">Login/Signup as a Food Bank</NavDropdown.Item>
                      <NavDropdown.Item href="/nologin/loginsignuprestaurant">Login/Signup as a Restaurant</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/nologin/aboutus">About Us</Nav.Link>
                    <Nav.Link href="/nologin/contactus">Contact</Nav.Link>
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

export default NavbarNoLogIn;