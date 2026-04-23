import { Container } from 'react-bootstrap';
import WaitlistEmbed from '../components/WaitlistEmbed';

export default function ContactPage() {
  return (
    <Container className="my-5">
      <h1>Join the Waitlist</h1>
      <p>Fill out the form below to receive updates about Sub2Lease.</p>
      <WaitlistEmbed />
    </Container>
  );
}