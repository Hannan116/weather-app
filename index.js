const apiKey = '29b406daabf2000dcaa86be5203aa90d'; // Replace with your API key
const cityInput = document.getElementById('search-city');

cityInput.addEventListener('keyup', () => {
  const cityName = cityInput.value;

  // Fetch weather data using city name and API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp - 273.15; // Convert Kelvin to Celsius
      const city = data.name;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      // Update HTML elements
      document.querySelector('.temperature').textContent = `${temperature.toFixed(2)}°C`;
      document.querySelector('.city').textContent = city;
      document.querySelector('.humidity-text').textContent = `${humidity}% Humidity`;
      document.querySelector('.wind-text').textContent = `${windSpeed} Km/h Wind Speed`;
    });
});
