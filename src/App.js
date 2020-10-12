import React from 'react';
import './App.css';
import Quote from './Quote.js';

function App() {
  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
        <h3>Generate Random Quotes and Tweet Them</h3>
        <hr></hr>
        <Quote />
    </div>
  );
}

export default App;
