import { Container } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Container className="my-5">
        <h1>Welcome to the Home Page</h1>
      </Container>
    </>
  );
}