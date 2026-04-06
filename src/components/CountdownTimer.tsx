import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const launch = new Date('2026-05-15').getTime();

    const interval = setInterval(() => {
      setTime(launch - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(time / 86400000);
  const hours = Math.floor((time / 3600000) % 24);
  const minutes = Math.floor((time / 60000) % 60);
  const seconds = Math.floor((time / 1000) % 60);

  return (
    <div>
      <h3>Launch Countdown</h3>
      <p>{days}d {hours}h {minutes}m {seconds}s</p>
    </div>
  );
}