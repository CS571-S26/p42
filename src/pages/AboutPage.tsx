import { Container, Row, Col } from 'react-bootstrap';
import FounderCard from '../components/FounderCard';

export default function AboutPage() {
  return (
    <Container className="my-5">
      <h1>About Sub2Lease</h1>
      <p>
        Sub2Lease is a student-focused subleasing platform built to make temporary housing easier,
        safer, and more organized for college students.
      </p>

      <h2 className="mt-4">Our Mission</h2>
      <p>
        Our goal is to simplify the process of finding, posting, and managing short-term student
        subleases, connecting students who need housing with students who need to fill a lease.
      </p>

      <h2 className="mt-4">What You Can Do</h2>

      <Row className="g-4 mb-4 align-items-center">
        <Col md={6}>
          <h3 className="h5">Home</h3>
          <p className="text-muted">
            Learn about Sub2Lease, see the launch countdown, browse platform features, and find
            answers to common questions.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="/p42/landing.png"
            alt="Screenshot of the Sub2Lease landing page"
            className="img-fluid rounded border"
          />
        </Col>
      </Row>

      <Row className="g-4 mb-4 align-items-center">
        <Col md={6} className="order-md-2">
          <h3 className="h5">Browse Listings</h3>
          <p className="text-muted">
            Search available subleases near your campus. Filter by price, bedrooms, type, dates, and view listings on an interactive map.
          </p>
        </Col>
        <Col md={6} className="order-md-1">
          <img
            src="/p42/listings.png"
            alt="Screenshot of the Sub2Lease listings page"
            className="img-fluid rounded border"
          />
        </Col>
      </Row>

      <h2 className="mt-4">Team</h2>
      <Row className="g-4">
        <Col md={6}>
          <FounderCard
            name="Colin Yamada"
            role="Founder / Developer"
            bio="Working on the frontend and early product design for Sub2Lease."
          />
        </Col>
        <Col md={6}>
          <FounderCard
            name="Future Team Member"
            role="Product / Operations"
            bio="Helping shape the student housing experience and waitlist onboarding."
          />
        </Col>
      </Row>
    </Container>
  );
}