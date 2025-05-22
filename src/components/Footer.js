import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Cryptofox AI Consulting</h5>
            <p className="text-muted">Empowering businesses through AI integration.</p>
            <p className="text-muted">710-10 Allanhurst Dr, Toronto, ON, M9A 4J5</p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/services" className="text-white-50">Services</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white-50">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-white-50">Contact Us</Nav.Link>
              <Nav.Link href="#" className="text-white-50">Privacy Policy</Nav.Link>
            </Nav>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p className="text-white-50">Phone: 416-684-5838</p>
            <p className="text-white-50">Email: info@cryptofoxtech.com</p>
            <div>
              <a href="#" className="text-white me-2"><i className="fab fa-linkedin fa-lg"></i></a>
            </div>
          </Col>
        </Row>
        <hr className="bg-secondary my-3" />
        <div className="text-center text-muted">
          &copy; {new Date().getFullYear()} Cryptofox AI Consulting. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
