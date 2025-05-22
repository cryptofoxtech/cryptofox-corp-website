import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">About Cryptofox AI Consulting</h1>

      <Row className="align-items-center mb-5">
        <Col md={6} className="mb-4 mb-md-0">
          <img
            src="https://placehold.co/600x400/7D7D7D/FFFFFF?text=Our+Mission"
            alt="Our Mission"
            className="img-fluid rounded-3 shadow"
          />
        </Col>
        <Col md={6}>
          <h2 className="text-primary">Our Mission & Vision</h2>
          <p className="lead">
            **Mission:** To empower businesses by seamlessly integrating AI solutions, optimizing operations, and fostering innovation, enabling them to gain a significant competitive advantage in a rapidly evolving technological landscape.
          </p>
          <p className="lead">
            **Vision:** To be the trusted partner for businesses seeking to strategically leverage AI, transforming complex technological challenges into tangible growth opportunities and becoming a leader in practical AI implementation.
          </p>
        </Col>
      </Row>

      <h2 className="text-center mb-4 text-primary">Our Approach</h2>
      <Row className="mb-5">
        <Col md={4} className="mb-3">
          <Card className="h-100 shadow-sm rounded-3">
            <Card.Body className="text-center">
              <i className="fas fa-handshake fa-3x text-info mb-3"></i>
              <Card.Title>Client-Centric</Card.Title>
              <Card.Text>We prioritize understanding your unique business challenges and goals to deliver tailored solutions.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="h-100 shadow-sm rounded-3">
            <Card.Body className="text-center">
              <i className="fas fa-rocket fa-3x text-info mb-3"></i>
              <Card.Title>Practical & Agile</Card.Title>
              <Card.Text>Focused on delivering tangible results through iterative development and agile methodologies.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="h-100 shadow-sm rounded-3">
            <Card.Body className="text-center">
              <i className="fas fa-shield-alt fa-3x text-info mb-3"></i>
              <Card.Title>Secure & Scalable</Card.Title>
              <Card.Text>Building robust, secure, and scalable AI solutions with a strong emphasis on operational excellence.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className="text-center mb-4 text-primary">Meet Our Founder</h2>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <img
            src="https://placehold.co/150x150/FF6B6B/FFFFFF?text=CD"
            alt="Carlos DaSilva"
            className="img-fluid rounded-circle mb-3 shadow"
          />
          <h3>Carlos DaSilva</h3>
          <p className="lead text-muted">Founder & Lead AI Implementation Consultant</p>
          <p>
            With over 15 years of experience in system administration, cloud platforms, and automation, Carlos brings a unique blend of deep technical expertise and practical implementation knowledge to the AI consulting space. His background ensures that AI solutions are not just theoretically sound but are robustly deployed, integrated, and maintainable in real-world business environments. Carlos is passionate about leveraging AI to drive tangible business value and continuously updates his knowledge through resources like Microsoft Learning.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;