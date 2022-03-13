const API_KEY = '5ba8f3ca21ff305666670a1d8567de57'
function onGeoOk(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  console.log('You live in', lat, lon)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector('#weather span:first-child')
      const city = document.querySelector('#weather span:last-child')
      city.innerText = data.name
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}'c`
    })
}

function onGeoError() {
  alert(`Can't fint you. No weather for you.`)
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
// onGeoOk({ sexObj })
