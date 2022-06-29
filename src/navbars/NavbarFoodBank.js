import React from "react";
import {Navbar,Nav,Container, Offcanvas} from 'react-bootstrap'
import logo from './Cratos.svg';

//find, liked, map, about us, contact

function NavbarFoodBank(props) {
  return (
    <div>
      <>
        {['sm'].map((expand) => (
          <Navbar key={expand} bg="light" variant="light" expand={expand} className="mb-3">
            <Container fluid>
            <Navbar.Brand href="/foodbank/home">
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
                    <Nav.Link href="/foodbank/discover">Discover</Nav.Link>
                    <Nav.Link href="/foodbank/liked">Liked</Nav.Link>
                    <Nav.Link href="/foodbank/map">Map</Nav.Link>
                    <Nav.Link href="/foodbank/aboutus">About Us</Nav.Link>
                    <Nav.Link href="/foodbank/contactus">Contact</Nav.Link>
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

export default NavbarFoodBank;
