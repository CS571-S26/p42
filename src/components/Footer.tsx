import Socials from './Socials';

export default function Footer() {
  return (
    <footer className="text-center py-4 bg-light mt-5">
      <p className="mb-1">Sub2Lease</p>
      <small>Student subleasing made simpler.</small>
      <div className="mt-2">
        <Socials />
      </div>
    </footer>
  );
}