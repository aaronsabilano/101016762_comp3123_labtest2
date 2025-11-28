// Shows the weather info that comes from the API.
// App.js handles the fetching — this component just displays it.

import React from "react";

function WeatherCard({ data }) {
  //Here I pull out the main parts from the API response
  const { name, sys, main, weather, wind } = data;

  // The weather usually only has one object with a description
  const condition = weather && weather[0] ? weather[0] : null;

  // temps 
  // (already in Celsius because we passed units=metric)
  const tempC = main?.temp;
  const feelsLike = main?.feels_like;
  const minTemp = main?.temp_min;
  const maxTemp = main?.temp_max;

  return (
    <div className="weather-card">
      {/* top section with city + temp */}
      <div className="weather-main">
        <div className="weather-left">
          <h2 className="weather-location">
            {name}
            {/* optional: some places might not have a country code */}
            {sys?.country ? `, ${sys.country}` : ""}
          </h2>

          {/* short description (e.g. Clouds • scattered clouds) */}
          {condition && (
            <p className="weather-description">
              {condition.main} • {condition.description}
            </p>
          )}

          {/* big temperature number */}
          {typeof tempC === "number" && (
            <p className="weather-temp">{Math.round(tempC)}°C</p>
          )}
        </div>
      </div>

      {/* bottom details (feels like, humidity, etc.) */}
      <div className="weather-details">
        <div className="detail-item">
          <span className="label">Feels like</span>
          <span className="value">
            {feelsLike != null ? `${Math.round(feelsLike)}°C` : "-"}
          </span>
        </div>

        <div className="detail-item">
          <span className="label">Min / Max</span>
          <span className="value">
            {minTemp != null && maxTemp != null
              ? `${Math.round(minTemp)}°C / ${Math.round(maxTemp)}°C`
              : "-"}
          </span>
        </div>

        <div className="detail-item">
          <span className="label">Humidity</span>
          <span className="value">
            {main?.humidity != null ? `${main.humidity}%` : "-"}
          </span>
        </div>

        <div className="detail-item">
          <span className="label">Wind</span>
          <span className="value">
            {wind?.speed != null ? `${wind.speed} m/s` : "-"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
