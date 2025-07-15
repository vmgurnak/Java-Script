const formElement = document.querySelector('form')
const citySelectElement = formElement.city

console.log('Выбранные опции:', citySelectElement.selectedOptions)

/**
 * То же, что и:
const selectValue = [...citySelectElement.selectedOptions]
  .reduce((acc, { value }, index) => {
    const separator = index > 0 ? ',' : ''

    return `${acc}${separator}${value}`
  }, '')
 */
const selectValue = [...citySelectElement.selectedOptions]
  .map(({ value }) => value)
  .join(',')

console.log(
  'Текущее значение mutiple-селекта:',
  selectValue
)