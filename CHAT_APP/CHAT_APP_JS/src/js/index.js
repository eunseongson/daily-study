'use strict'

const socket = io()

socket.on('connect', function () {
  var name = prompt('이름을 입력해주세요.', '')
  socket.emit('newUserConnect', name)
})

let room = ['1', '2']
let a = 0

const chatWindow = document.getElementById('chatWindow')
socket.on('chat message', function (data) {
  if (data.name === 'SERVER') {
    var infoEl = document.getElementById('info')
    infoEl.innerHTML = data.message

    setTimeout(() => {
      info.innerText
    }, 1000)
  } else {
    var chatMessageEl = drawChatMessage(data)
    chatWindow.appendChild(chatMessageEl)

    chatWindow.scrollTop = chatWindow.scrollHeight
  }
})

function drawChatMessage(data) {
  const wrap = document.createElement('p')
  const message = document.createElement('span')
  const name = document.createElement('span')

  name.innerText = data.name
  message.innerText = data.message

  name.classList.add('output__user__name')
  message.classList.add('output__user__message')

  wrap.classList.add('output__user')
  wrap.dataset.id = socket.id

  wrap.appendChild(name)
  wrap.appendChild(message)

  return wrap
}

const sendButton = document.getElementById('chatMessageSendBtn')
const chatInput = document.getElementById('chatInput')

sendButton.addEventListener('click', function () {
  let message = chatInput.value
  if (!message) return false

  socket.emit('sendMessage', {
    message,
  })
  chatInput.value = ''
})
