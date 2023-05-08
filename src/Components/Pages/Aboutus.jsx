import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutPage() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>About Us</h1>
          <p>
            Welcome to our website! We are a dedicated team passionate about delivering high-quality products
            and services to our customers. Our mission is to provide innovative solutions that meet our customers' needs.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam ex non urna dictum, ut consectetur
            mauris malesuada. Sed in lectus non mauris feugiat aliquet nec nec ante. Donec id malesuada tellus, in
            dignissim tortor. Duis consectetur aliquam sapien in tempus. Nulla eget nulla purus.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;