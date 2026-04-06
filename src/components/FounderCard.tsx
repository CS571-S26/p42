import { Card } from 'react-bootstrap';

type FounderCardProps = {
  name: string;
  role: string;
  bio: string;
};

export default function FounderCard({ name, role, bio }: FounderCardProps) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{role}</Card.Subtitle>
        <Card.Text>{bio}</Card.Text>
      </Card.Body>
    </Card>
  );
}