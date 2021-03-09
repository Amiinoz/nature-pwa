import React, { useState } from 'react'

import { fetchWeather } from './api/fetchWeather'
import MainLogo from './images/sunnny.svg'
import './App.css'

const App = () => {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query)

      setWeather(data)
      //reset
      setQuery('')

    }
  }

  return (
    <div className='main-container'>


      <img className='main-logo' src={MainLogo} alt="Main Logo" />


      <h2 className='heading'>Weather App</h2>

      <input
        type='text'
        className='search'
        placeholder='Search for your city'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />

      {
        weather.main && (
          <div className='city'>
            <h2 className='city-name'>
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <div className='city-temp'>
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div className='info'>
              <img className='city-icon'
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        )
      }

    </div >


  )
}

export default App
