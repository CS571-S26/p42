import { Container } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import CountdownTimer from '../components/CountdownTimer';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Container className="my-5">
        <CountdownTimer />
      </Container>
    </>
  );
}