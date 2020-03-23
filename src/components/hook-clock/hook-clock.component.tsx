import React, { useState, useEffect } from 'react';
import './hook-clock.component.css';

const Clock = () => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    setFormattedDate(new Date().toLocaleString());
    const interval = setInterval(() => {
      setFormattedDate(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <span className='hook-clock' data-testid="hook-clock">
        {formattedDate}
      </span>
    </div>
  );
};

export default Clock;