import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

// class Example extends Component {
//   render() {
//     return <FlipClockCountdown to={new Date().getTime() + 24 * 3600 * 1000 + 5000} />;
//   }
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi guys!!!! WAY OUT WOODS in
        </p>
        <FlipClockCountdown to={new Date().getTime() + 24 * 3600 * 1000 + 5000} />
      </header>
    </div>
  );





  
}

export default App;
