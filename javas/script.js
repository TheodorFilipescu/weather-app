function getWeather() {
    var cityInput = document.getElementById("city-input");
    var cityName = cityInput.value;
  
    fetch(`https://api.weatherapi.com/v1/current.json?key=55414d95829445f08df03327230907&q=${cityName}`)
      .then(response => response.json())
      .then(data => {
        var weatherInfo = document.getElementById("weather-info");
        weatherInfo.innerHTML = `
          <h2>${data.location.name}</h2>
          <p>${data.current.condition.text}</p>
          <p>Temperature: ${data.current.temp_c}°C</p>
          <p>Humidity: ${data.current.humidity}%</p>
          <p>Wind Speed: ${data.current.wind_kph} km/h</p>
        `;
      })
      .catch(error => {
        console.log(error);
      });
  }
  