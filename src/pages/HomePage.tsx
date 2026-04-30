import { Container, Row, Col } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import CountdownTimer from '../components/CountdownTimer';
import FeatureCard from '../components/FeatureCard';
import FAQSection from '../components/FAQSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Container className="my-5">
        <h2 className="mb-3 text-center">Coming Soon</h2>
        <div className="text-center">
          <CountdownTimer />
        </div>

        <h2 className="mt-5 mb-3">Platform Features</h2>
        <Row className="g-4">
          <Col md={4}>
            <FeatureCard
              title="Find Subleases"
              text="Browse student-friendly short-term housing options."
            />
          </Col>
          <Col md={4}>
            <FeatureCard
              title="Post Listings"
              text="List available apartments or rooms for other students."
            />
          </Col>
          <Col md={4}>
            <FeatureCard
              title="Simple Waitlist"
              text="Join early and get updates as the platform launches."
            />
          </Col>
        </Row>

        <FAQSection />
      </Container>
    </>
  );
}