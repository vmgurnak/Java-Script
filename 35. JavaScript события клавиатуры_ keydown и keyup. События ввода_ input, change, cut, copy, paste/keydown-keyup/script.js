/**
 * События клавиатуры
 *  keydown — нажатие на клавишу
 *  keyup — отпускание клавиши
 */

document.addEventListener('keydown', (event) => {
  console.log('keydown event:', event)
})

document.addEventListener('keyup', (event) => {
  console.log('keyup event:', event)
})
