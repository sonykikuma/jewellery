import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #1a1a1a, #3d2a1e)",
        color: "#f8f9fa",
      }}
      className="py-4"
    >
      <Container>
        <Row>
          <Col md={4}>
            <h5
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "1.5rem",
                letterSpacing: "1px",
                color: "blue",
              }}
            >
              Authentic <span style={{ color: "#d4af37" }}>Jewels</span>
            </h5>
            <p>Fine jewellery for modern lifestyles.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Collections</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <p>Facebook | Instagram | Twitter</p>
          </Col>
        </Row>
        <div className="text-center mt-3">
          <p>
            © 2025{" "}
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "1.5rem",
                letterSpacing: "1px",
                color: "blue",
              }}
            >
              Authentic
            </span>
            <span style={{ color: "#d4af37" }}>Jewels</span> . All Rights
            Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
