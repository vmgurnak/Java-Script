const inputElement = document.querySelector('input')
const nameOutputElement = document.querySelector('.name-output')

inputElement.addEventListener('input', (event) => {
  nameOutputElement.textContent = inputElement.value
})
