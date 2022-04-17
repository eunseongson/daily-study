const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const fs = require('fs')
const io = require('socket.io')(server)

app.use(express.static('src'))

app.get('/', function (req, res) {
  fs.readFile('./src/index.html', (err, data) => {
    if (err) throw err
    res
      .writeHead(200, {
        'Content-Type': 'text/html',
      })
      .write(data)
      .end()
  })
})

let room = ['1', '2']
let a = 0

io.sockets.on('connection', function (socket) {
  // socket disconnect
  socket.on('disconnect', function () {
    var message = socket.name + '님이 퇴장했습니다'
    socket.broadcast.emit('updateMessage', {
      name: 'SERVER',
      message: message,
    })
  })

  socket.on('leaveRoom', (num, name) => {
    socket.leave(room[num], () => {
      console.log(name + 'leave a ' + room[num])
      io.to(room[num]).emit('leaveRoom', num, name)
    })
  })

  socket.on('joinRoom', (num, name) => {
    socket.join(room[num], () => {
      console.log(name + 'join a ' + room[num])
      io.to(room[num]).emit('joinRoom', num, name)
    })
  })

  socket.on('chat message', (num, name, msg) => {
    a = num
    io.to(room[a]).emit('chat message', name, msg)
  })

  // socket.on('sendMessage', function (data) {
  //   data.name = socket.name
  //   io.sockets.emit('updateMessage', data)
  // })
})

server.listen(8080, function () {
  console.log('서버 실행중...')
})
