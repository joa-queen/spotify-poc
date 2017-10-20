import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';

const App = ({ children }) => (
  <div className="App">
    <Header />
    <div className="App-container">
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
