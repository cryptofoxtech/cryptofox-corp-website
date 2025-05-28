import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

// Import your logo image
// The path is relative from src/components/Header.js to src/images/cryptofox-logo.png
import cryptofoxLogo from '../images/cryptofox-logo.png'; 

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={cryptofoxLogo} // Use the imported logo variable here
            alt="CryptoFox AI Consulting Logo"
            className="d-inline-block align-top me-2"
            style={{ height: '40px' }} // You can adjust this height as needed
            // Fallback for image loading errors (optional, but good practice)
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/40x40/4A4A4A/FFFFFF?text=CF"; }}
          />
          CryptoFox AI Consulting
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
            <Nav.Link as={Link} to="/services" className="text-white">Services</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-white">Contact Us</Nav.Link>
            {/* Optional: Add a button for a call to action if needed */}
            <Button as={Link} to="/contact" variant="primary" className="ms-lg-3 rounded-pill">
              Get a Quote
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;