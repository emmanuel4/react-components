import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const defaultTime = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
};

const Timer = styled.ul`
  .timerItem {
    display: inline-block;
    font-size: 12.5rem;
    list-style-type: none;
    padding: 1rem;
    text-align: center;
    .info {
      display: block;
      text-align: center;
      font-size: 2.5rem;
    }
  }
`;

function CountdownTimer({ countdownDate }) {
  const [time, setTime] = useState(defaultTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTime(countdownDate);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownDate]);

  const updateTime = (countdown) => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
    let countdownTime = new Date(countdown).getTime();
    let now = new Date().getTime(),
      distance = countdownTime - now;
    const days = Math.floor(distance / day),
      hours = Math.floor((distance % day) / hour),
      minutes = Math.floor((distance % hour) / minute),
      seconds = Math.floor((distance % minute) / second);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  return (
    <>
      <Timer>
        <li className="timerItem">
          {time.days} <span className="info">Días</span>
        </li>
        <li className="timerItem">
          {time.hours} <span className="info">Horas</span>
        </li>
        <li className="timerItem">
          {time.minutes} <span className="info">Minutos</span>
        </li>
        <li className="timerItem">
          {time.seconds} <span className="info">Segundos</span>
        </li>
      </Timer>
    </>
  );
}

export default CountdownTimer;
