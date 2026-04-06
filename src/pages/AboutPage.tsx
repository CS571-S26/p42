import { Container } from 'react-bootstrap';
import FounderCard from '../components/FounderCard';

export default function AboutPage() {
  return (
    <Container className="my-5">
      <h1>About the Product</h1>
      <p>
        Sub2Lease is a student subleasing platform designed to connect students looking for short-term housing with those who have available leases. Our mission is to make the subleasing process easier and more efficient for students, while also providing a safe and reliable platform for both parties.
      </p>
      <h2>Our Members</h2>
      <div className="row">
        <FounderCard name="John Doe" role="CEO" bio="John is the founder and CEO of Sub2Lease" />
        <FounderCard name="Jane Smith" role="CTO" bio="Jane is the founder and CTO of Sub2Lease" />
      </div>
    </Container>
  );
}