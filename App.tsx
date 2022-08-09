import * as React from 'react';
import './style.css';

import Navbar from './components/Navbar';
import CountdownTimer from './components/CountdownTimer';
import Slider from './components/Slider';

export default function App() {
  return (
    <div>
      <Navbar />
      <CountdownTimer countdownDate="09/02/2022" />
      <Slider />
      
    </div>
  );
}
