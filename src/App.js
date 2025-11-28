// src/App.js
import React, { useEffect, useState } from "react";
import { fetchWeatherByCity } from "./services/weatherApi";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

const DEFAULT_CITY = "Toronto";

function App() {
  // ---- STATE ----
  // current city the user wants weather for
  const [city, setCity] = useState(DEFAULT_CITY);

  // full weather JSON returned by the API
  const [weather, setWeather] = useState(null);

  // whether we’re currently loading data
  const [loading, setLoading] = useState(false);

  // any error messages (e.g. city not found, bad API key)
  const [error, setError] = useState("");

  // ---- EFFECT: fetch weather whenever "city" changes ----
  useEffect(() => {
    async function loadWeather() {
      try {
        setLoading(true);   // show "Loading..." text
        setError("");       // clear old error
        const data = await fetchWeatherByCity(city); // call our API helper
        setWeather(data);   // save data to state
      } catch (err) {
        setWeather(null);   // clear old weather data
        setError(err.message || "Something went wrong"); // save error message
      } finally {
        setLoading(false);  // stop loading spinner/text
      }
    }

    // actually call the async function
    loadWeather();
  }, [city]); // runs on first render AND every time "city" changes

  // ---- HANDLER: when the user submits a new city in SearchBar ----
  const handleSearch = (newCity) => {
    if (!newCity) return;
    setCity(newCity); // triggers useEffect → refetches weather
  };

  // ---- RENDER UI ----
  return (
    <div className="app-root">
      <div className="app-container">
        <header className="app-header">
          <h1>Simple Weather</h1>
          <p className="subtitle">Current weather powered by OpenWeatherMap</p>
        </header>

        {/*
          SearchBar gets two props:
          - onSearch: a function to call when user submits
          - initialCity: starting value in the search box
        */}
        <SearchBar onSearch={handleSearch} initialCity={DEFAULT_CITY} />

        {/* Loading text */}
        {loading && <p className="info-text">Loading weather...</p>}

        {/* Error text */}
        {error && !loading && (
          <p className="error-text">Error: {error}</p>
        )}

        {/* Show card only when we have data & no error */}
        {!loading && !error && weather && (
          <WeatherCard data={weather} />
        )}

        {/* When nothing yet (edge case) */}
        {!loading && !error && !weather && (
          <p className="info-text">Type a city name to see its weather.</p>
        )}
      </div>
    </div>
  );
}

export default App;
