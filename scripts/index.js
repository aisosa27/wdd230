document.addEventListener("DOMContentLoaded", function() {
    let visitCounter = localStorage.getItem("visitCounter");
    if (!visitCounter) {
      visitCounter = 0;
    }
    visitCounter++;
    localStorage.setItem("visitCounter", visitCounter);
    document.getElementById("visitCounter").textContent = visitCounter + " visits";
  });

  // Fetch weather data from OpenWeatherMap API
  const apiKey = 'ede4015a041f6fa253bd19bcc17848d1';
  const city = 'Rexburg';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Process weather data and display it
      const weatherInfo = document.getElementById('weather-info');
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      weatherInfo.innerHTML = `Weather in ${city}: ${temperature}°C, ${description}`;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });

