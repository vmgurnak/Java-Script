const formElement = document.querySelector('#regForm')

console.log(
  'Элементы input, textarea и select внутри формы:',
  formElement.elements
)

console.log(
  'Элементы input, textarea и select внутри формы (querySelectorAll):',
  formElement.querySelectorAll('input, textarea, select')
)

console.log('Поле ввода логина:', formElement.elements.login)
console.log('Поле ввода пароля:', formElement.elements.password)
console.log('Радиокнопки выбора пола:', formElement.elements.gender)