import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="VENT RADIOACTIVE GAS?"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Y / N" className="btn btn-dark" />
          </div>
        </div>
      </form>
      <h1>Sydney</h1>
      <h2>NSW, AUS 11:11</h2>
      <ul>
        <li>Sunday 6th Smarch 2022</li>
        <li>Partly Cloudy with a chance of meatballs</li>
        <li>Lousy Smarch Weather</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly Cloudy"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Preciptiation: 15%</li>
            <li>Humidity: 100%</li>
            <li>
              Wind: <em>comin' in from the south</em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
