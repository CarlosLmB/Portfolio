import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <Row>
          <Col className="text-center">
            <p>© {new Date().getFullYear()} Carlos Cordero. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};



export default Footer;