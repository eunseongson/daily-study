const clock = document.querySelector('h2#clock')

function getClock() {
  const date = new Date()
  const hours = String(date.getHours()).padStart('2', '0') // padStart('길이', 빈 공간에 들어갈 문자), padEnd도 가능
  const minute = String(date.getMinutes()).padStart('2', '0')
  const seconds = String(date.getSeconds()).padStart('2', '0')
  clock.innerText = `${hours}:${minute}:${seconds}`
}

getClock()
setInterval(getClock, 1000)
