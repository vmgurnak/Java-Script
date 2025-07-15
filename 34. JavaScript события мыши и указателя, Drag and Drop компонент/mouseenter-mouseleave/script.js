const secondBoxElement = document.querySelector('.box-2')

secondBoxElement.addEventListener('mouseenter', () => {
  console.log('🟢 Курсор навели на элемент box-2 (или на его дочерний элемент)')
})

secondBoxElement.addEventListener('mouseleave', () => {
  console.log('🟡 Курсор увели с элемента box-2 (или на его дочерний элемент)')
})
