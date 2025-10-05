import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const categories = [
  {
    title: "Rings",
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Necklaces",
    img: "https://plus.unsplash.com/premium_photo-1740020241476-be2394113f0c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Earrings",
    img: "https://plus.unsplash.com/premium_photo-1680181724947-75f0956f1469?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Bracelets",
    img: "https://images.unsplash.com/photo-1694617232492-3c804e06f234?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Categories = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Shop by Categories</h2>
      <Row>
        {categories.map((cat, idx) => (
          <Col md={3} sm={6} key={idx} className="mb-4">
            <Card className="shadow-sm border-0">
              <Card.Img
                variant="top"
                src={cat.img}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title>{cat.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
