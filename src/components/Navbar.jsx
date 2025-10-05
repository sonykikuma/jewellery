import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#">
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: "700",
              fontSize: "1.8rem",
              letterSpacing: "1px",
              color: "blue",
            }}
          >
            Authentic <span style={{ color: "#d4af37" }}>Jewels</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Jewellery</Nav.Link>
            <Nav.Link href="#">Rings</Nav.Link>
            <Nav.Link href="#">Collections</Nav.Link>
            <Nav.Link href="#">Offers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
