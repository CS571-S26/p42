import { Nav } from 'react-bootstrap';

type Social = {
  label: string;
  href: string;
};

const socials: Social[] = [
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'X / Twitter', href: 'https://twitter.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
];

export default function Socials() {
  return (
    <nav aria-label="Social media links">
      <Nav className="justify-content-center gap-3">
        {socials.map(({ label, href }) => (
          <Nav.Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Sub2Lease on ${label}`}
          >
            {label}
          </Nav.Link>
        ))}
      </Nav>
    </nav>
  );
}