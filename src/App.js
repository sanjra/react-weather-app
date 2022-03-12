import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Melbourne" />
        <footer>
          <p>
            This project was coded by sanjra while learning React.
            <a
              className="App-link"
              href="https://github.com/sanjra/react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.sanjra.weather
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
