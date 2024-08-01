'use client'
import { useState, useEffect } from 'react';
import styles from '../components/Registration/RegistrationForm.module.css';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Timer = ({ endTime }: { endTime: string }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(endTime) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    console.log('End Time:', endTime);
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <div className={styles.countdown}>
      <span>{String(timeLeft.days).padStart(2, '0')}</span> : 
      <span>{String(timeLeft.hours).padStart(2, '0')}</span> : 
      <span>{String(timeLeft.minutes).padStart(2, '0')}</span> : 
      <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
    </div>
  );
};

export default Timer;
