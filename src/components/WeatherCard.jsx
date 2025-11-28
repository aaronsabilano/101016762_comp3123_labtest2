// src/components/WeatherCard.jsx
import React from "react";

function WeatherCard({ data }) {
  // Destructure the main parts of the JSON response
  const { name, sys, main, weather, wind } = data;

  // The "weather" array usually has one main object we care about
  const condition = weather && weather[0] ? weather[0] : null;

  // Icon URL based on the icon code from the API (e.g. "10d")
  const iconUrl = condition
    ? `https://openweathermap.org/img/wn/${condition.icon}@2x.png`
    : null;

  // Current temperature and extras (already Celsius from units=metric)
  const tempC = main?.temp;
  const feelsLike = main?.feels_like;
  const minTemp = main?.temp_min;
  const maxTemp = main?.temp_max;

  return (
    <div className="weather-card">
      {/* Top section: location, description, big temperature, icon */}
      <div className="weather-main">
        <div className="weather-left">
          <h2 className="weather-location">
            {name}
            {sys?.country ? `, ${sys.country}` : ""}
          </h2>

          {condition && (
            <p className="weather-description">
              {condition.main} &bull; {condition.description}
            </p>
          )}

          {typeof tempC === "number" && (
            <p className="weather-temp">
              {Math.round(tempC)}°C
            </p>
          )}
        </div>

        {iconUrl && (
          <div className="weather-icon-wrapper">
            <img
              className="weather-icon"
              src={iconUrl}
              alt={condition?.description || "Weather icon"}
            />
          </div>
        )}
      </div>

      {/* Bottom section: details grid (feels like, min/max, humidity, wind) */}
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
