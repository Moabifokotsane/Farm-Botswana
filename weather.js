function getWeather() {
  const apiKey = 'Y6ew5Z5bbig9Abk0WikGjPbrtLJFckcW';
  const locationKey = '123950';
  const url = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = data[0].Temperature.Metric.Value;
      const description = data[0].WeatherText;
      const windSpeed = data[0].Wind.Speed.Metric.Value;
      const humidity = data[0].RelativeHumidity;

      document.getElementById('temperature').textContent = temperature;
      document.getElementById('description').textContent = description;
      document.getElementById('wind-speed').textContent = windSpeed;
      document.getElementById('humidity').textContent = humidity;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
