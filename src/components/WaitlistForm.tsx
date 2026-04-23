import { useState } from 'react';
import { Alert, Button, Form, Card } from 'react-bootstrap';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setName('');
  }

  return (
    <Card className="p-3">
      <Card.Body>
        {submitted && (
          <Alert variant="success">
            Thanks for joining the waitlist!
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </Form.Group>

          <Button type="submit">Join Waitlist</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}