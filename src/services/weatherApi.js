// src/services/weatherApi.js

// We keep the API key in an environment variable so it is not hard-coded
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// Base URL for current weather endpoint
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

/**
 * Fetch current weather data for a given city name.
 * Returns the full JSON response from OpenWeatherMap.
 */
export async function fetchWeatherByCity(city) {
  if (!city) throw new Error("City name is required");

  // Build the URL with query params
  const url = `${BASE_URL}?q=${encodeURIComponent(
    city
  )}&appid=${API_KEY}&units=metric`; // metric = Celsius

  // Send the HTTP request
  const res = await fetch(url);

  // If HTTP status is not OK (e.g. 404, 401, 500), throw an error
  if (!res.ok) {
    let message = "Failed to fetch weather data";

    try {
      const errorBody = await res.json();
      if (errorBody && errorBody.message) {
        message = errorBody.message;
      }
    } catch {
      // ignore JSON parse errors, keep default message
    }

    throw new Error(message);
  }

  // Parse JSON and return it
  const data = await res.json();
  return data;
}
