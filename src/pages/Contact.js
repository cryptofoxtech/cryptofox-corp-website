import React from 'react';
import { Container, Button, Card, Row, Col, Form } from 'react-bootstrap';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real application, you would send this data to a backend API.
    console.log('Contact form submitted!');
    // Using a custom modal/message box instead of alert()
    displayMessageBox('Thank you for your inquiry! We will get back to you shortly.');
    event.target.reset(); // Clear the form
  };

  // Simple function to simulate a message box
  const displayMessageBox = (message) => {
    const messageBox = document.createElement('div');
    messageBox.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      text-align: center;
      font-family: sans-serif;
      color: var(--bs-dark);
    `;
    messageBox.innerHTML = `
      <p>${message}</p>
      <button onclick="this.parentNode.remove()" style="
        background-color: var(--bs-primary);
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 50rem;
        cursor: pointer;
        margin-top: 15px;
      ">OK</button>
    `;
    document.body.appendChild(messageBox);
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Contact Us</h1>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm rounded-3 p-4">
            <Card.Body>
              <p className="text-center mb-4">
                Have a question or ready to start your AI journey? Fill out the form below or reach out to us directly.
              </p>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required className="rounded-pill" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" required className="rounded-pill" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridCompany">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type="text" placeholder="Your company name" className="rounded-pill" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridPhone">
                  <Form.Label>Phone Number (Optional)</Form.Label>
                  <Form.Control type="tel" placeholder="e.g., 416-123-4567" className="rounded-pill" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridMessage">
                  <Form.Label>How can we help you?</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Tell us about your AI needs or questions..." required className="rounded-3" />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" className="rounded-pill py-2">
                    Submit Inquiry
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center text-center mt-5">
        <Col md={8}>
          <h3 className="text-primary">Direct Contact</h3>
          <p className="lead">
            Email: <a href="mailto:info@cryptofoxtech.com" className="text-decoration-none text-primary">info@cryptofoxtech.com</a>
          </p>
          <p className="lead">
            Phone: <a href="tel:+14166845838" className="text-decoration-none text-primary">416-684-5838</a>
          </p>
          <p className="lead">
            Address: 710-10 Allanhurst Dr, Toronto, ON, M9A 4J5
          </p>
          {/* Social Media Links Placeholder */}
          <div className="mt-4">
            <a href="#" className="text-dark me-3"><i className="fab fa-linkedin fa-2x"></i></a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;