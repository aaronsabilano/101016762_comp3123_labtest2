// Small helper for calling the OpenWeather API

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchWeatherByCity(city) {
  // basic check so we don't call the API with an empty string
  if (!city) {
    throw new Error("City name is required");
  }

  // build the full request URL
  const url = `${BASE_URL}?q=${encodeURIComponent(
    city
  )}&appid=${API_KEY}&units=metric`;

  // make the HTTP request
  const res = await fetch(url);

  // if something went wrong (404, 401, etc.)
  if (!res.ok) {
    let msg = "Failed to fetch weather data";

    try {
      const body = await res.json();
      if (body && body.message) {
        msg = body.message;
      }
    } catch (e) {
      // ignore JSON parse errors, just use the default message
    }

    throw new Error(msg);
  }

  // success: turn the response into JS object and return it
  const data = await res.json();
  return data;
}
