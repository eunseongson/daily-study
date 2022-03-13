const toDoForm = document.querySelector('#todo-form')
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.querySelector('#todo-list')
let toDos = []
const TODOS_KEY = 'todos'

const localStorageToDos = JSON.parse(localStorage.getItem(TODOS_KEY))
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}
if (localStorageToDos !== null) {
  console.log(localStorageToDos)
  localStorageToDos.map(todo => {
    toDoPaint(todo)
  })
}

function removeButton(e) {
  const li = e.target.parentNode
  li.remove()
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
  saveToDos()
}

function toDoPaint(todo) {
  const li = document.createElement('li')
  const span = document.createElement('span')
  const button = document.createElement('button')
  const x = '❌'
  span.innerText = x + todo.text
  toDos.push(todo)
  // button.innerText = '❌'
  saveToDos()
  button.addEventListener('click', removeButton)
  li.id = todo.id
  li.appendChild(span)
  // li.appendChild(button)
  toDoList.appendChild(li)
}

function handleToDoSubmit(e) {
  e.preventDefault()
  const newTodo = toDoInput.value
  const newToDoObj = { text: newTodo, id: Date.now() }
  toDoInput.value = ''
  toDoPaint(newToDoObj)
}

toDoForm.addEventListener('submit', handleToDoSubmit)
