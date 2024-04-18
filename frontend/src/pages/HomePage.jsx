import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center full-height">
        <Col md={8} className="text-center">
          <h1 className="display-4 mt-4 ">Welcome to Our Website</h1>
          <p className="lead">
            We provide top-notch services to meet your needs. Explore our
            offerings and start your journey with us today!
          </p>
          <Button
            variant="primary"
            size="lg"
            href="https://nimapinfotech.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Services
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
