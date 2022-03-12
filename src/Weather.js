import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.city.country,
      date: "Smarchday 11 11:11",
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      weather_icon: response.data.weather.weather_icon,
      feels_like: response.data.main.feels_like,
      temp_min: response.data.main.temp_min,
      temp_max: response.data.main.temp_max,
      wind: response.data.main.wind.speed,
      humidity: response.data.main.humidty,
    });

    setTemperature();

    setReady(true);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-dark" />
            </div>
          </div>
        </form>
        <h1>
          {weatherData.city}
          {weatherData.date}
        </h1>
        <h2>{weatherData.country}</h2>
        <ul>
          <li>{weatherData}</li>
          <li class="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels Like: {weatherData.feels_like}</li>
              <li>Temp Min: {weatherData.temp_min}</li>
              <li>Temp Max: {weatherData.temp_max}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "244beb54e63857bfaf6d34f213aa412a";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}
