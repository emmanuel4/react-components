import * as React from 'react';
import './style.css';

import Navbar from './components/Navbar';
import CountdownTimer from './components/CountdownTimer';

export default function App() {
  return (
    <div>
      <Navbar />
      <CountdownTimer countdownDate="09/02/2022" />
    </div>
  );
}
