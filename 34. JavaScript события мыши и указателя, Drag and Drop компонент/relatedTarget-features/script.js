const buttonElement = document.querySelector('.button')

buttonElement.addEventListener('mouseout', (event) => {
  console.log('🟡 Курсор увели с элемента кнопки')
  console.log('relatedTarget:', event.relatedTarget)
})
