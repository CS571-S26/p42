import { Container } from 'react-bootstrap';
import WaitlistForm from '../components/WaitlistForm';

export default function ContactPage() {
  return (
    <Container className="my-5">
      <h1>Join the Waitlist!</h1>
      <p>
        Enter your information below to receive launch updates and early access news.
      </p>
      <WaitlistForm />
    </Container>
  );
}