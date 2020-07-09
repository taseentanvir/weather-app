import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

// custom imports
import Footer from "./Footer";
import WeatherData from "./WeatherData";

require("dotenv").config();

toast.error();
const weatherApiKey = "bd829566b2c2223dedc24f35c1092364";

const Weather = () => {
  const [city, setCity] = React.useState("");
  const [data, setData] = React.useState(null);

  // const [err, setErr] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data.main);
      })
      .catch((err) => {
        toast.error("There was an error while fetching the data", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  const handleChange = (e) => {
    setData(null);
    // setErr("");
    setCity(e.target.value);
  };

  const handleSearchAgainClick = () => {
    setData(null);
    setCity("");
  };

  return (
    <div className="wrapper">
      <span className="sun" />
      <span className="cloud" />

      {!data ? (
        <form onSubmit={handleSubmit}>
          <label className="label" htmlFor="city">
            Weather App
          </label>
          <input
            name="city"
            id="city"
            value={city}
            onChange={handleChange}
            type="text"
            placeholder="e.g London | City Name"
          />
          <button className="search" type="submit">
            Search
          </button>
        </form>
      ) : (
        <WeatherData data={data} city={city} />
      )}
      {data && (
        <button
          className="searchAgain"
          style={{ marginTop: 38 }}
          onClick={handleSearchAgainClick}
        >
          Search Again
        </button>
      )}
      <Footer />
    </div>
  );
};

export default Weather;
