function getWeather() {
  // Replace YOUR_API_KEY_HERE with your OpenWeatherMap API key
  let apiKey = "1032ac3f662c1f121b1a39264a2b3c90";
  
  // Replace CITY_NAME_HERE with the name of the city you want weather information for
  let city = "Gaborone";
  
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      let weather = {};
      weather.temperature = data.main.temp;
      weather.description = data.weather[0].description;
      weather.icon = data.weather[0].icon;
      displayWeather(weather);
    })
    .catch(error => {
      console.log("Error fetching weather data: ", error);
    });
}

function displayWeather(weather) {
  // Replace temperature, description, and icon with the corresponding HTML element IDs in your web page
  document.getElementById("temperature").textContent = weather.temperature;
  document.getElementById("description").textContent = weather.description;
  // The weather icon is returned as a code (e.g. "01d" for clear sky day). You can use an icon font or an image file to display the weather icon.
  // Here's an example of how to display the icon using the OpenWeatherMap icon font:
  document.getElementById("icon").className = `owf owf-${weather.icon}`;
}
