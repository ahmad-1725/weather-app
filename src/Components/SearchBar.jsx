import React from "react";
import { useState } from "react";
import '../assets/styles.css'

function SearchBar({ searchCity }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      searchCity(city.trim());
    }
  }

  return (
    <>
      <form className="searchForm" onSubmit={handleSubmit}>
        <input onChange={(e) => setCity(e.target.value)} 
        type="text" value={city} placeholder="Enter city name..." />
        <button type="submit">Search</button>
      </form>
    </>
  )
}

export default SearchBar;