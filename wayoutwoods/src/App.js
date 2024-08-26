import './App.css';
import walkinwoods from './img/walkinwoods.JPG';
import welcome from './img/welcome.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.js'; 

import React from 'react';
import {Card, CardBody, ListGroup, ListGroupItem, CardLink, CardText, CardTitle} from 'reactstrap';

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';


function App() {
  return (

    <header>
      
      <div className="main-background" style={{ backgroundImage: `url(${walkinwoods})`, backgroundSize: 'cover' }}>

        <FlipClockCountdown to={new Date().getTime() + 24 * 3600 * 1000 + 5000} />
      </div>

      </header>

      
  );





  
}

export default App;
