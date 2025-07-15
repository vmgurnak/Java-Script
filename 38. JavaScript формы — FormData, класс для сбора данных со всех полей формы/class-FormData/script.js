const formElement = document.querySelector('form')

formElement.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(formElement)

  formData.append('example', 'bla-bla-bla')
  console.log('Значение по ключу "name":', formData.get('example'))
  console.log('Есть ли запись по ключу "name"?', formData.has('example'))
  formData.delete('example')

  console.log( Object.fromEntries(formData) )
})