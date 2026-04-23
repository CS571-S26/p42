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
        subleases.
      </p>

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