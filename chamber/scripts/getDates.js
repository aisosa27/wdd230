document.addEventListener("DOMContentLoaded", function() {
  var lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = lastModified;

  const apiKey = 'ede4015a041f6fa253bd19bcc17848d1';
  const city = 'Rexburg';
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  // Fetch current weather data
  fetch(currentWeatherUrl)
      .then(response => response.json())
      .then(data => {
          // Process and display current weather data
          const currentTemperature = data.main.temp;
          const currentDescription = data.weather[0].description;
          document.getElementById('current-weather').innerHTML = `Current Temperature: ${currentTemperature}°C, Description: ${currentDescription}`;
      })
      .catch(error => {
          console.error('Error fetching current weather data:', error);
      });

  // Fetch forecast data
  fetch(forecastUrl)
      .then(response => response.json())
      .then(data => {
          // Process and display forecast data
          const forecastInfo = document.getElementById('forecast-info');
          const forecasts = data.list.filter((item, index) => index % 8 === 0); // Select one forecast per day
          forecasts.forEach(forecast => {
              const date = new Date(forecast.dt * 1000); // Convert timestamp to Date object
              const temperature = forecast.main.temp;
              const description = forecast.weather[0].description;
              const dateString = date.toLocaleDateString();
              forecastInfo.innerHTML += `<p>${dateString}: ${temperature}°C, ${description}</p>`;
          });
      })
      .catch(error => {
          console.error('Error fetching forecast data:', error);
      });
});

  document.addEventListener("DOMContentLoaded", function() {
    displayMeetGreetBanner();
  });

  function displayMeetGreetBanner() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    if (dayOfWeek >= 1 && dayOfWeek <= 3) { // Display banner only on Monday, Tuesday, and Wednesday
      document.getElementById('meet-greet-banner').style.display = 'block';
    }
  }

  function closeBanner() {
    document.getElementById('meet-greet-banner').style.display = 'none';
  }

