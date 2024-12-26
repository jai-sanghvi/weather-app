import { getWeatherData } from "./weather.js";

const form = document.querySelector('form');
const input = document.querySelector('input[type="search"]');
let statusMessage = document.querySelector('#status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if ( !statusMessage ) {
    statusMessage = document.createElement('p');
    statusMessage.id = 'status';
    document.body.appendChild(statusMessage); 
  }

  statusMessage.textContent = 'loading';

  getWeatherData(input.value)
  .then(() => {
    statusMessage.textContent = 'done, check console for data';
  })
});