document.addEventListener('cut', (event) => {
  console.log('Событие CUT:', event)

  navigator.clipboard.readText().then((clipboardText) => {
    console.log('clipboardText:', clipboardText)
  })
})

document.addEventListener('copy', (event) => {
  console.log('Событие COPY:', event)

  navigator.clipboard.readText().then((clipboardText) => {
    console.log('clipboardText:', clipboardText)
  })
})

document.addEventListener('paste', (event) => {
  console.log('Событие PASTE:', event)

  navigator.clipboard.readText().then((clipboardText) => {
    console.log('clipboardText:', clipboardText)
  })
})