const boxElement = document.querySelector('.box')

boxElement.addEventListener('contextmenu', (event) => {
  event.preventDefault()
  console.log('contextmenu')
})
