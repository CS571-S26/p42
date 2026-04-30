import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const launch = new Date('2026-05-15').getTime();

  const [time, setTime] = useState(() => launch - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(launch - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [launch]);

  const days = Math.floor(time / 86400000);
  const hours = Math.floor((time / 3600000) % 24);
  const minutes = Math.floor((time / 60000) % 60);
  const seconds = Math.floor((time / 1000) % 60);

  const units = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <div className="d-flex justify-content-center gap-5 my-4">
      {units.map(({ label, value }) => (
        <div key={label} className="text-center">
          <div style={{ fontSize: '6rem', fontWeight: 700, lineHeight: 1 }}>
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-muted" style={{ fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}