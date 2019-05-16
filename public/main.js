const getWeatherFromAPI = () => {
  document.querySelector('.temp').textContent = ' '
  const input = document.querySelector('.search-bar').value
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      input +
      '&appid=5f1939fad7de2144c849eee2d5be2d56' +
      '&units=imperial'
  )
    .then(resp => {
      console.log(resp)
      return resp.json()
    })
    .then(weatherData => {
      console.log(weatherData)
      // update the HTML
      document.querySelector('.temp').textContent = weatherData.main.temp
      document.querySelector('.sky').textContent +=
        weatherData.weather[0].description
    })
}

document.querySelector('button').addEventListener('click', getWeatherFromAPI)
