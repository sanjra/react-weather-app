import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Lousy Weather App</header>
        <Weather />
        <div className="row">
          <div className="col-12">
            <img
              src="https://frinkiac.com/img/S07E06/598146.jpg"
              alt="Frinkiac Smarch"
              width="440"
              height="300"
            />
          </div>
        </div>
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
