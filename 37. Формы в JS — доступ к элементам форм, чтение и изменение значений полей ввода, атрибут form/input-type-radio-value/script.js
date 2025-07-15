const formElement = document.querySelector('form')
const genderRadios = formElement.gender

console.log('Информация о гендере:', genderRadios)

/**
 * То же самое, что и:
 * genderRadios[0].checked = true
 */
genderRadios.value = 'Мужской'

console.log('Выбранный пол:', genderRadios.value)