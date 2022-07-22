import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import logo from "./TrefosLogo.svg";

function NavbarDefault() {
  return (
    <div>
      <>
        {["sm"].map((expand) => (
          <Navbar
            key={expand}
            bg="light"
            variant="light"
            expand={expand}
            className="mb-3"
          >
            <Container fluid>
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src={logo}
                  className="d-inline-block align-top logoImage"
                />{" "}
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Trefos
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/discover">Discover Restaurants</Nav.Link>
                    <Nav.Link href="/restaurant">Restaurant Dashboard</Nav.Link>
                    <Nav.Link href="/volunteer">Volunteering</Nav.Link>
                    <Nav.Link href="/aboutus">About Us</Nav.Link>
                    <Nav.Link href="/contactus">Contact</Nav.Link>
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

export default NavbarDefault;
