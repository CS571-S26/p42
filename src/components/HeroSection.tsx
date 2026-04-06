import { Container } from 'react-bootstrap';

export default function HeroSection() {
  return (
    <div className="bg-light py-5">
      <Container>
        <h1>Welcome to Sub2Lease!</h1>
        <p>
          This is a simple landing page for a student subleasing platform. We are currently in development, but stay tuned for updates!
        </p>
      </Container>
    </div>
  );
}