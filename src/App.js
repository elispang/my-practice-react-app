import React from 'react';
import './App.css';
import Quote from './Quote.js';
import Author from './Author.js';

function App() {
  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
        <h3>Generate Random Quotes and Tweet</h3>
        <hr></hr>
        <Quote />
        <Author />
    </div>
  );
}

export default App;
