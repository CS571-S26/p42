import { Accordion } from 'react-bootstrap';

export default function FAQSection() {
  return (
    <Accordion className="mt-4">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is Sub2Lease?</Accordion.Header>
        <Accordion.Body>
          Sub2Lease is a platform that helps students find and post short-term subleases.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Who is it for?</Accordion.Header>
        <Accordion.Body>
          It is designed for students who need temporary housing or want to fill an unused lease.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>How will emails be used?</Accordion.Header>
        <Accordion.Body>
          Emails will only be used for launch updates, product news, and early access notifications.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}