// src/App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>
        </p>

        {/* Contenedor para Matt Estuvo Aquí */}
        <div className="matt-container">
          <p className="matt-text">Matt Estuvo Aquí.</p>
        </div>

        {/* Contenedor para el juego */}
        <div className="game-container">
          <iframe
            title="Ninja Game"
            src="https://twestyma77c.github.io/Pre-Bootcamp-P-blico/"
            width="800"
            height="600"
            frameBorder="0"
          ></iframe>
        </div>

        <p>
          Learn React
        </p>
      </header>
    </div>
  );
}

export default App;
