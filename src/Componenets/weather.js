import React, { useState } from 'react';
import axios from 'axios';

export default function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9ae2200eb82722de0ffc52f3ea098a71&units=metric`
      );
      setWeather(response.data);
      setError('');
    } catch (error) {
      setError('City not found or there was an issue with the request.');
      setWeather(null);
    }
  };

  const handleClick = () => {
    if (city) {
      fetchWeather();
    } else {
      setError('Please enter a city name.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Weather App</h2>
      
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3 ">
            <input
              type="text"
              className="form-control"
              value={city}
              onChange={handleCityChange}
              placeholder="Enter city name"
              aria-label="City"
            />
            <div className="input-group-append">
              <button className="btn btn-primary mx-2" onClick={handleClick}>Get Weather</button>
            </div>
          </div>

          {error && (
            <div className="alert alert-danger text-center" role="alert">
              {error}
            </div>
          )}

          {weather && (
            <div className="card text-center" style={{background:"pink",fontSize:"30px"}}>
              <div className="card-body">
                <h5 className="card-title">{weather.name} Weather</h5>
                <p className="card-text">Temperature: {weather.main.temp}°C</p>
                <p className="card-text">Weather: {weather.weather[0].description}</p>
                <p className="card-text">Humidity: {weather.main.humidity}%</p>
                <p className="card-text">Wind Speed: {weather.wind.speed} m/s</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
