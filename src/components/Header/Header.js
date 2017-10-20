import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';

export default () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Ipsy Spotify Challenge</h1>

    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </header>
);
