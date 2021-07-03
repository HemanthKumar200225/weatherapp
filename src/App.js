import React from "react";
import { useState } from "react";
// import aud from 

const api = {
  key: "d52abb38362a26bba109a123e0b5dc6a",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('Kakinada');
  const [weather, setWeather] = useState({
    weather: {
      0: {
        main: "Clouds"
      }
    },
    main: {
      humidity: 42,
      temp_max: 308.41,
      temp_min: 308.41
    },
    sys: {
      sunrise: 1625011252,
      sunset: 1625058504
    },
    coord: {
      lat: 16.9333,
      lon: 82.2167
    }
  });

  const search = (e) => {
    fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        console.log(weather);
      });
  }

  return (
    <div className="app_div">
      <h1 style={{ fontSize: "60px" }}>Know your Weather!</h1>
      <input autocapitalize="characters" type="text" placeholder="Eg:- London" value={query} onChange={e => setQuery(e.target.value)} />
      <br />
      <br />
      <button type="submit" value="Submit" onClick={search} >🔍</button>
      <br />
      <br />
      <br />
      <div className="container">
        <span>Weather:- {weather.weather[0].main}</span>
        <br />
        <span>Humidity:- {weather.main.humidity}</span>
        {/* <br />
        <span>Sunrise:- {weather.sys.sunrise}</span>
        <br />
        <span>Sunset:- {weather.sys.sunrise}</span> */}
        <br />
        <span>Temparature max:- {weather.main.temp_max - 273}°</span>
        <br />
        <span>Temparature min:- {weather.main.temp_min - 273}°</span>
        <br />
        <span>Latitude:- {weather.coord.lon}</span>
        <br />
        <span>Longitude:- {weather.coord.lat}</span>
        <br />
      </div>
      <br />
      <div style={{ position: "fixed", bottom: "2%", right: "2%", color: "white" }} className="signature">By <i>Hemanth Kumar</i></div>
    </div >
  );
}

export default App;
