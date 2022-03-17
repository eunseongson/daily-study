const images = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']

const imgTag = document.createElement('img')
const todaysImage = images[Math.floor(Math.random() * images.length)]
imgTag.src = `img/${todaysImage}`

document.body.appendChild(imgTag)
