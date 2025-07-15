const formElement = document.querySelector('form')

const loginInputElement = formElement.login
const aboutTextAreaElement = formElement.about

console.log('Логин:', loginInputElement.value)

aboutTextAreaElement.value = 'Новый текст'

/* ✅ Правильно */
console.log('О себе:', aboutTextAreaElement.value)

/* ❌ Неправильно */
console.log('О себе:', aboutTextAreaElement.textContent)

/* ❌ Неправильно */
console.log('О себе:', aboutTextAreaElement.innerHTML)
