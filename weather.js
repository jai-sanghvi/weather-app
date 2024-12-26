const API_KEY = "YFB7EBR6S7J5LF3PLGDPLM2NA";

export async function getWeatherData(location) {
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`);
  console.log(response); // log response from server

  const data = await response.json();
  console.log(data); // log the JSON data from the server response

  const weatherData = processWeatherData(data);
  renderWeatherData(weatherData);
}

function processWeatherData(data) {
  const location = data.resolvedAddress;
  const temperature = Math.round(data.currentConditions.temp);
  const feelsLike = Math.round(data.currentConditions.feelslike);

  return {location, temperature, feelsLike};
}

function renderWeatherData(weatherData) {
  const location = document.querySelector('#location');
  location.textContent = weatherData.location;

  const currentTemperature = document.querySelector('#current-temperature');
  currentTemperature.textContent = `${weatherData.temperature}\u00B0`;

  const feelsLike = document.querySelector('#feels-like');
  feelsLike.textContent = `Feels like ${weatherData.feelsLike}\u00B0`;
}