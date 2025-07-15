const formElement = document.querySelector('form')

formElement.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = {}

  for (const element of formElement.elements) {
    if (!element.name) {
      continue
    }

    if (element.type === 'checkbox') {
      formData[element.name] = element.checked
      continue
    }

    if (element.type === 'radio' && !element.checked) {
      continue
    }

    formData[element.name] = element.value
  }

  console.log('formData:', formData)
})