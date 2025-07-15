const formElement = document.querySelector('form')
const loginInputElement = formElement.login
const passwordInputElement = formElement.password

console.log(
  'К какой форме относится поле ввода логина?',
  loginInputElement.form
)

console.log(
  'К какой форме относится поле ввода пароля?',
  passwordInputElement.form
)

console.log(
  'К какой форме относится селект выбора города?',
  document.querySelector('#city').form
)

console.log(
  'Поля формы:',
  formElement.elements
)