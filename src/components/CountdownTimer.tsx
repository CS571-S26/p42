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

  return (
    <div>
      <h3>Launch Countdown: {new Date(launch).toLocaleString()}</h3>
      <p>{days}d {hours}h {minutes}m {seconds}s</p>
    </div>
  );
}