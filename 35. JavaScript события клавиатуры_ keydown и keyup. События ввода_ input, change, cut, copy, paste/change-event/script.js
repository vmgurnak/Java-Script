const inputElement = document.querySelector('input')
const errorMessageElement = document.querySelector('#error-message')

inputElement.addEventListener('change', () => {
  const isInvalid = inputElement.value.length < 5

  inputElement.classList.toggle('is-invalid', isInvalid)
  errorMessageElement.textContent = isInvalid
    ? 'Минимальная длина — 5 символов'
    : ''
})
