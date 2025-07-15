const buttonElement = document.querySelector('.button')

buttonElement.addEventListener('click', () => {
  console.log('Произошел клик')
})

buttonElement.addEventListener('mousemove', () => {
  console.log('Движение мыши над элементом кнопки')
})

buttonElement.addEventListener('mouseover', (event) => {
  console.log('🟢 Курсор навели на элемент кнопки')
  console.log('target:', event.target)
  console.log('relatedTarget:', event.relatedTarget)
})

buttonElement.addEventListener('mouseout', (event) => {
  console.log('🟡 Курсор увели с элемента кнопки')
  console.log('target:', event.target)
  console.log('relatedTarget:', event.relatedTarget)
})