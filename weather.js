function getWeather() {
  fetch('http://www.weather.gov.bw/')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const htmlDocument = parser.parseFromString(data, 'text/html');

      const temperature = htmlDocument.querySelector('.temperature-value').textContent;
      const description = htmlDocument.querySelector('.weather-description').textContent;
      const windSpeed = htmlDocument.querySelector('.wind-speed').textContent;
      const humidity = htmlDocument.querySelector('.humidity').textContent;

      document.getElementById('temperature').textContent = temperature;
      document.getElementById('description').textContent = description;
      document.getElementById('wind-speed').textContent = windSpeed;
      document.getElementById('humidity').textContent = humidity;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
