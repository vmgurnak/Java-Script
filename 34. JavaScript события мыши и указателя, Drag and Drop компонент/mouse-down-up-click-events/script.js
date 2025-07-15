const buttonElement = document.querySelector('.button')

buttonElement.addEventListener('mousedown', () => {
  console.log('1. mousedown')
})

buttonElement.addEventListener('mouseup', () => {
  console.log('2. mouseup')
})

buttonElement.addEventListener('click', () => {
  console.log('3. click')
})
