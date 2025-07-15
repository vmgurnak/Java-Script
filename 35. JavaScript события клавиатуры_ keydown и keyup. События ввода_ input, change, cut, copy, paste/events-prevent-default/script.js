document.addEventListener('keydown', (event) => {
  const { code, metaKey, altKey } = event

  /**
   * Обработка нажатия на 'PageDown'
   */
  if (
    code === 'ArrowDown' && metaKey || // MacOS
    code === 'Numpad3' // Windows и др.
  ) {
    event.preventDefault()
    console.log('Нажатие на PageDown отменено!')
  }

  /**
   * Попытка обработать хоткей
   * закрытия окна приложения
   */
  if (
    code === 'Q' && metaKey || // MacOS
    code === 'F4' && altKey // Windows и др.
  ) {
    console.log('Поймали хоткей закрытия приложения!')
    event.preventDefault() // Не отработает
  }
})
