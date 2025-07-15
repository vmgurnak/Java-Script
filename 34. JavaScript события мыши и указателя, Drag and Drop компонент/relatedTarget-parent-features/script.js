const secondBoxElement = document.querySelector('.box-2')

secondBoxElement.addEventListener('mouseover', (event) => {
  console.log('🟢 Курсор навели на элемент box-2 (или на его дочерний элемент)')
  console.log('target:', event.target)
  console.log('relatedTarget:', event.relatedTarget)
})

secondBoxElement.addEventListener('mouseout', (event) => {
  console.log('🟡 Курсор увели с элемента box-2 (или на его дочерний элемент)')
  console.log('target:', event.target)
  console.log('relatedTarget:', event.relatedTarget)
})
