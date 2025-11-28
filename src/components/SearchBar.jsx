// src/components/SearchBar.jsx
import React, { useState } from "react";

function SearchBar({ onSearch, initialCity }) {
  // Local state for the input box
  const [input, setInput] = useState(initialCity || "");

  // When the user presses Enter or clicks the button
  const handleSubmit = (e) => {
    e.preventDefault();                 // stop page reload
    const trimmed = input.trim();
    if (!trimmed) return;               // ignore empty input
    onSearch(trimmed);                  // tell parent which city to use
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Enter city name (e.g., Toronto)"
        value={input}
        onChange={(e) => setInput(e.target.value)} // track typed text
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
