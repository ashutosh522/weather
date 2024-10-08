const ApiKey = 'c7c2395753b8ba9b3b878aa747a168a6';
async function myWeather() {
  const CityName = document.querySelector('#city-input').value;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${ApiKey}&units=metric`);
  const data = await response.json();
  // console.log(data);
  // console.log(data.name);
  // console.log(data.main.temp);
  // console.log(data.visibility);
  // console.log(data.weather[0].description);
  // console.log(data.wind.speed);
  // console.log(data.weather[0].icon);
  let cityElement = document.querySelector('#city');
  if (CityName === '') {
    cityElement.innerHTML = 'Please enter a city name';
  }
  else {
    cityElement.innerText = `City: ${data.name}`;
  }

  let tempElement = document.querySelector('#temp');
  tempElement.innerText = `Temperature: ${Math.round(data.main.temp)}°C`;
  let descriptionElement = document.querySelector('#description');
  descriptionElement.innerText = `Weather Type: ${data.weather[0].description}`;
  let windElement = document.querySelector('#wind');
  windElement.innerText = `Wind Speed: ${data.wind.speed}  m/s`;
  let humidityElement = document.querySelector('#humidity');
  humidityElement.innerText = `Humidity: ${data.main.humidity}%`;
}
myWeather();

function reset() {
  document.querySelector('#city-input').value = '';
  document.querySelector('#city').innerText = '';
  document.querySelector('#temp').innerText = '';
  document.querySelector('#description').innerText = '';
  document.querySelector('#wind').innerText = '';
  document.querySelector('#humidity').innerText = '';
}
reset();
