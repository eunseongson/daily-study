const images = ['0.jpg', '1.jpg', '2.jpg']

const imgTag = document.createElement('img')
const todaysImage = images[Math.floor(Math.random() * images.length)]
imgTag.src = `img/${todaysImage}`

document.body.appendChild(imgTag)
