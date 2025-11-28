101016762_comp3123_labtest2 – Simple Weather App

A weather search application built using React, demonstrating API fetching, component-based UI, dynamic content updates, and responsive design.
This project was created for COMP3123 – Lab Test 2.

🌤️ Overview

This application allows users to search for any city and view the current weather based on data from the OpenWeatherMap API.
The UI displays:

Temperature (°C)

Weather condition & description

Country + city name

Feels-like temperature

Min/Max temperature

Humidity

Wind speed

Weather icon (from OpenWeatherMap)

Dynamic search functionality

🛠️ Tech Stack

React (Create React App)

JavaScript (ES6+)

OpenWeatherMap API

CSS (custom theming)

📁 Project Structure
101016762_comp3123_labtest2/
│── public/
│── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   └── WeatherCard.jsx
│   ├── services/
│   │   └── weatherApi.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
│── .env (not pushed to GitHub)
│── README.md
│── package.json

🔧 Running the Project Locally
1. Clone the repository:
git clone https://github.com/<your-username>/101016762_comp3123_labtest2.git

2. Install dependencies:
npm install

3. Create a .env file in the project root:
REACT_APP_WEATHER_API_KEY=YOUR_API_KEY_HERE


⚠️ Do NOT wrap the key in quotes.
⚠️ Restart npm start every time you change .env.

4. Start the development server:
npm start


The app will open at:

http://localhost:3000

🌐 API Used

OpenWeather – Current Weather Data
Endpoint:

https://api.openweathermap.org/data/2.5/weather?q={CITY}&appid={API_KEY}&units=metric


Icon source:

https://openweathermap.org/img/wn/{icon}@2x.png

📸 Screenshots
Application UI

Terminal Compilation Output

These images show the working UI and successful build logs required for the lab submission.

🚀 Deployment (Optional for Lab)

You can deploy using:

Vercel

Netlify

Render

GitHub Pages

Make sure to add your API key as an environment variable in the hosting provider.

✔️ Lab Requirements Checklist

 App + GitHub repo named correctly

 Weather API integrated

 Icons, theme, font styling

 Search bar (dynamic content)

 Displays all required weather fields

 Custom UI based on response

 README with screenshots

 Hosted link (optional)