import React from "react";
import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div
      className="hero-section text-center text-white d-flex align-items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1725918319127-fc4b1eeeba54?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhbm5lciUyMGZvciUyMGpld2VsbGVyeSUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
      }}
    >
      <Container>
        <h1 className="display-4 fw-bold">
          Elegant Jewellery for Every Occasion
        </h1>
        <p className="lead">
          Discover our timeless collections of rings, necklaces and more.
        </p>
        <Button variant="light" size="lg" className="me-3">
          Shop Now
        </Button>
        <Button variant="outline-light" size="lg">
          Explore Collections
        </Button>
      </Container>
    </div>
  );
};

export default Hero;
