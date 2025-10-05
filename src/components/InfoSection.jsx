import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const InfoSection = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        <Row className="text-center">
          <Col md={4}>
            <h4>Free Shipping</h4>
            <p>Enjoy free delivery on all orders across India.</p>
          </Col>
          <Col md={4}>
            <h4>Certified Jewellery</h4>
            <p>Every piece comes with authenticity certification.</p>
          </Col>
          <Col md={4}>
            <h4>Easy Returns</h4>
            <p>30-day hassle-free returns on all purchases.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoSection;
