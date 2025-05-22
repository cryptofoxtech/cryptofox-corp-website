import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, Row, Col, Form, Spinner, Alert } from 'react-bootstrap';
import { generateAIUseCases } from '../utils/geminiApi'; // Import the API utility

const Home = () => {
  const [industryChallenge, setIndustryChallenge] = useState('');
  const [aiUseCases, setAiUseCases] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateUseCases = async () => {
    if (!industryChallenge.trim()) {
      setError("Please describe your industry and challenge to generate AI use cases.");
      return;
    }

    setLoading(true);
    setAiUseCases('');
    setError(null);

    try {
      const result = await generateAIUseCases(industryChallenge);
      setAiUseCases(result);
    } catch (err) {
      setError("An error occurred while connecting to the AI service. Please try again later.");
      console.error("Error generating AI use cases:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="my-5">
      {/* Hero Section */}
      <Row className="align-items-center justify-content-center text-center text-md-start py-5 bg-light rounded-3 shadow-sm">
        <Col md={7} className="order-md-1 order-2">
          <h1 className="display-4 fw-bold mb-3">Unlock Your Business's AI Potential</h1>
          <p className="lead mb-4">
            Seamlessly integrate cutting-edge AI solutions to optimize operations, drive innovation, and gain a significant competitive advantage.
          </p>
          <Button as={Link} to="/contact" variant="primary" size="lg" className="rounded-pill px-4 me-md-3">
            Request a Free Assessment
          </Button>
          <Button as={Link} to="/services" variant="outline-secondary" size="lg" className="rounded-pill px-4 mt-3 mt-md-0">
            Learn Our Services
          </Button>
        </Col>
        <Col md={5} className="order-md-2 order-1 mb-4 mb-md-0">
          <img
            src="https://placehold.co/500x300/FF6B6B/FFFFFF?text=AI+Solutions"
            alt="AI Solutions"
            className="img-fluid rounded-3 shadow"
          />
        </Col>
      </Row>

      {/* Services Overview Section */}
      <h2 className="text-center my-5">Our Core Services</h2>
      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100 shadow-sm rounded-3">
            <Card.Body className="text-center">
              <i className="fas fa-lightbulb fa-3x text-primary mb-3"></i>
              <Card.Title>AI Strategy & Assessment</Card.Title>
              <Card.Text>
                Identify high-impact AI opportunities and develop a tailored roadmap for your business.
              </Card.Text>
              <Button as={Link} to="/services" variant="outline-primary" className="rounded-pill">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm rounded-3">
            <Card.Body className="text-center">
              <i className="fas fa-cogs fa-3x text-primary mb-3"></i>
              <Card.Title>AI Implementation & MLOps</Card.Title>
              <Card.Text>
                Hands-on deployment, integration, and operationalization of AI solutions with DevOps principles.
              </Card.Text>
              <Button as={Link} to="/services" variant="outline-primary" className="rounded-pill">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm rounded-3">
            <Card.Body className="text-center">
              <i className="fas fa-users-cog fa-3x text-primary mb-3"></i>
              <Card.Title>Training & Support</Card.Title>
              <Card.Text>
                Empower your team with the knowledge and skills to manage and leverage AI effectively.
              </Card.Text>
              <Button as={Link} to="/services" variant="outline-primary" className="rounded-pill">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* AI Use Case Generator Section */}
      <Row className="my-5 justify-content-center">
        <Col md={10}>
          <Card className="shadow-lg rounded-3 p-4 bg-info text-white">
            <Card.Body className="text-center">
              <h2 className="mb-4">✨ Discover Your AI Potential ✨</h2>
              <p className="lead mb-4">
                Tell us a bit about your industry and a business challenge, and our AI will suggest potential use cases.
              </p>
              <Form>
                <Form.Group className="mb-3" controlId="aiChallengeInput">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="E.g., 'We are a manufacturing company struggling with equipment downtime.' or 'I run a small retail business and want to improve customer engagement.'"
                    value={industryChallenge}
                    onChange={(e) => setIndustryChallenge(e.target.value)}
                    className="rounded-3"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  onClick={handleGenerateUseCases}
                  disabled={loading}
                  className="rounded-pill px-4 py-2"
                >
                  {loading ? (
                    <>
                      <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                      <span className="ms-2">Generating...</span>
                    </>
                  ) : (
                    'Generate AI Use Cases'
                  )}
                </Button>
              </Form>

              {error && (
                <Alert variant="danger" className="mt-4 rounded-3">
                  {error}
                </Alert>
              )}

              {aiUseCases && (
                <Card className="mt-4 text-dark text-start shadow-sm rounded-3">
                  <Card.Body>
                    <h5 className="card-title text-primary mb-3">Suggested AI Use Cases:</h5>
                    {aiUseCases.split('\n').map((line, index) => (
                      <p key={index} className="mb-1">{line}</p>
                    ))}
                  </Card.Body>
                </Card>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Why Choose Us Section */}
      <h2 className="text-center my-5">Why Choose Cryptofox AI Consulting?</h2>
      <Row className="align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <img
            src="https://placehold.co/600x400/4ECDC4/FFFFFF?text=Expertise"
            alt="Expertise"
            className="img-fluid rounded-3 shadow"
          />
        </Col>
        <Col md={6}>
          <ul className="list-unstyled">
            <li className="d-flex align-items-start mb-3">
              <i className="fas fa-check-circle text-success me-3 mt-1 fa-lg"></i>
              <div>
                <h5 className="fw-bold">Practical System Administration Foundation</h5>
                <p className="text-muted mb-0">Our deep roots in system administration and DevOps ensure AI solutions are robustly deployed and maintainable.</p>
              </div>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="fas fa-check-circle text-success me-3 mt-1 fa-lg"></i>
              <div>
                <h5 className="fw-bold">Azure AI Specialization</h5>
                <p className="text-muted mb-0">Leverage our proven expertise with Microsoft Azure AI services for cutting-edge solutions.</p>
              </div>
            </li>
            <li className="d-flex align-items-start mb-3">
              <i className="fas fa-check-circle text-success me-3 mt-1 fa-lg"></i>
              <div>
                <h5 className="fw-bold">End-to-End Implementation</h5>
                <p className="text-muted mb-0">We don't just advise; we actively participate in hands-on implementation, accelerating your time-to-value.</p>
              </div>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;