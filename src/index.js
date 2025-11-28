// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";   // global/basic styles (optional)
import "./App.css";     // our main app styles
import App from "./App"; // main component for the app

// Create a React root and render <App /> inside the "root" div in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
