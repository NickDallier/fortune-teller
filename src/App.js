import './App.css';
import GenerateMsgButton from './GenerateMsgButton.js';
import React from "react";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
          <p className="logo"><a href="http://nickdallier.ca">Nick Dallier</a></p>
          <ul>
              <li><a href="http://nickdallier.ca#aboutMe">About Me</a></li>
              <li><a href="http://nickdallier.ca#contact">Contact</a></li>
              <li><a href="https://nickdallier-fortuneteller.netlify.app/">Fortune Generator</a></li>
              <li><a href="https://nickdallier-jamming.netlify.app">Jammming</a></li>
          </ul>
      </nav>
      </header>
      <main className="App-main">
        <GenerateMsgButton />
      </main>
    </div>
  );
}
