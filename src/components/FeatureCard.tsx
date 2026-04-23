import { Card } from 'react-bootstrap';

type FeatureCardProps = {
  title: string;
  text: string;
};

export default function FeatureCard({ title, text }: FeatureCardProps) {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}