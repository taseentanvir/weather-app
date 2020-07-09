import * as React from "react";

const WeatherData = ({ data, city }) => {
  // state
  const [isFahren, setIsFahren] = React.useState(false);

  const { temp, feels_like, temp_min, temp_max, pressure, humidity } = data;
  // fahrenheit conversion
  const celsToFahren = (temp) => Math.round(temp * 1.8 + 32);

  const handleFahren = () => {
    setIsFahren(true);
  };
  const handleCels = () => {
    setIsFahren(false);
  };

  return (
    <div
      className="weatherData"
      style={{ paddingTop: 0, paddingBottom: 0, position: "relative" }}
    >
      <span className="weatherImg" />
      <div style={{ display: "flex" }}>
        <button type="button" onClick={handleCels} style={{ marginRight: 5 }}>
          Celsius
        </button>
        <button type="button" onClick={handleFahren}>
          Fahrenheit
        </button>
      </div>

      <ul>
        <h1>{isFahren ? celsToFahren(temp) : temp}°</h1>
        <li
          style={{
            marginTop: -16,
            marginBottom: 15,
            fontWeight: "bold",
            fontSize: 19,
          }}
        >
          Feels like: {isFahren ? celsToFahren(feels_like) : feels_like}°
        </li>
        <li>Minimum Temp: {isFahren ? celsToFahren(temp_min) : temp_min}°</li>
        <li>Maximum Temp: {isFahren ? celsToFahren(temp_max) : temp_max}°</li>
        <li>Humidity: {humidity}</li>
        <li>Pressure: {pressure}</li>
        <h1>{city}</h1>
      </ul>
    </div>
  );
};

export default WeatherData;
