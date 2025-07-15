const buttonElement = document.querySelector('.button')

buttonElement.addEventListener('mousedown', (event) => {
  console.log('1. mousedown', event.target, event.currentTarget)
})

buttonElement.addEventListener('mouseup', (event) => {
  console.log('2. mouseup', event.target, event.currentTarget)
})

buttonElement.addEventListener('click', (event) => {
  console.log('3. click', event.target, event.currentTarget)
})
