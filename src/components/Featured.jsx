import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const products = [
  {
    name: "Diamond Ring",
    price: "₹ 50,000",
    img: "https://images.unsplash.com/photo-1652434329242-645c771240ae?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Gold Necklace",
    price: "₹ 75,000",
    img: "https://images.unsplash.com/photo-1721807644923-df3186074d89?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Pearl Earrings",
    price: "₹ 30,000",
    img: "https://plus.unsplash.com/premium_photo-1739548338201-4c337ce176d2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Featured = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Featured Jewellery</h2>
      <Row>
        {products.map((p, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <Card className="shadow-sm border-0">
              <Card.Img
                variant="top"
                src={p.img}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title>{p.name}</Card.Title>
                <Card.Text>{p.price}</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Featured;
