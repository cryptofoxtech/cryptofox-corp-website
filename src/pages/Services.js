import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';

const Services = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Our AI Consulting Services</h1>

      {/* Service 1: AI Opportunity Assessment & Strategy */}
      <Card className="mb-4 shadow-sm rounded-3">
        <Card.Body>
          <h2 className="card-title text-primary">AI Opportunity Assessment & Strategy</h2>
          <p className="card-text">
            We help you identify the most impactful areas where AI can transform your business.
          </p>
          <ul>
            <li>Discovery Workshops & Business Process Analysis</li>
            <li>Data Readiness Assessment & Governance Recommendations</li>
            <li>AI Use Case Identification, Prioritization & ROI Analysis</li>
            <li>Tailored AI Adoption Roadmap Development</li>
          </ul>
        </Card.Body>
      </Card>

      {/* Service 2: AI Solution Design & Architecture */}
      <Card className="mb-4 shadow-sm rounded-3">
        <Card.Body>
          <h2 className="card-title text-primary">AI Solution Design & Architecture</h2>
          <p className="card-text">
            Designing scalable and robust AI architectures, with a strong focus on Microsoft Azure.
          </p>
          <ul>
            <li>Technology Stack Selection (ML models, frameworks)</li>
            <li>Cloud-Native AI Architecture Design (Azure ML, Cognitive Services, Databricks)</li>
            <li>Integration Planning with Existing IT Infrastructure</li>
            <li>Data Pipeline Design for efficient data flow</li>
          </ul>
        </Card.Body>
      </Card>

      {/* Service 3: AI Implementation & Deployment */}
      <Card className="mb-4 shadow-sm rounded-3">
        <Card.Body>
          <h2 className="card-title text-primary">AI Implementation & Deployment</h2>
          <p className="card-text">
            Hands-on execution to bring AI solutions to life within your environment, leveraging our DevOps expertise.
          </p>
          <ul>
            <li>AI Model Configuration & Deployment on Azure</li>
            <li>Custom AI Application Development (Python, Bash, PowerShell)</li>
            <li>System Integration with Databases (PostgreSQL, MySQL, SQL Server)</li>
            <li>Containerization (Docker) & Orchestration (Kubernetes/AKS)</li>
            <li>Infrastructure Provisioning (IaaS/PaaS) on Azure & IBM Cloud</li>
          </ul>
        </Card.Body>
      </Card>

      {/* Service 4: AI Model Training & Optimization */}
      <Card className="mb-4 shadow-sm rounded-3">
        <Card.Body>
          <h2 className="card-title text-primary">AI Model Training & Optimization</h2>
          <p className="card-text">
            Ensuring your AI models are performant and deliver accurate results.
          </p>
          <ul>
            <li>Data Preparation & Feature Engineering</li>
            <li>Model Training & Fine-tuning</li>
            <li>Performance Monitoring & Evaluation</li>
            <li>Iterative Optimization for accuracy and relevance</li>
          </ul>
        </Card.Body>
      </Card>

      {/* Service 5: AI Governance & Operationalization (MLOps) */}
      <Card className="mb-4 shadow-sm rounded-3">
        <Card.Body>
          <h2 className="card-title text-primary">AI Governance & Operationalization (MLOps)</h2>
          <p className="card-text">
            Establishing best practices for the long-term management and security of AI systems.
          </p>
          <ul>
            <li>MLOps Pipeline Setup (Jenkins CI/CD, Ansible)</li>
            <li>Version Control for Models & Code (GitHub, Azure DevOps Git)</li>
            <li>Security & Compliance (SSL/TLS, PGP, SSH, Azure Key Vault)</li>
            <li>Monitoring & Alerting Configuration (Azure Monitor, New Relic)</li>
          </ul>
        </Card.Body>
      </Card>

      {/* Service 6: AI Training & Knowledge Transfer */}
      <Card className="mb-4 shadow-sm rounded-3">
        <Card.Body>
          <h2 className="card-title text-primary">AI Training & Knowledge Transfer</h2>
          <p className="card-text">
            Empowering your team to manage and leverage AI solutions independently.
          </p>
          <ul>
            <li>Customized Training Workshops for Client Teams</li>
            <li>Operational Playbooks & Runbooks Development</li>
            <li>Guidance on Continuous Learning & AI Advancements (Microsoft Learning)</li>
          </ul>
        </Card.Body>
      </Card>

      <div className="text-center mt-5">
        <Button as={Link} to="/contact" variant="primary" size="lg" className="rounded-pill px-4">
          Ready to Transform Your Business with AI?
        </Button>
      </div>
    </Container>
  );
};

export default Services;
