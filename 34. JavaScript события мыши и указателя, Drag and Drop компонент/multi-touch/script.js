const addCircleElement = (x, y, isRed, label) => {
  const circleElementMarkup = `
    <div
      class="circle ${isRed ? 'red' : ''}"
      style="
        top: ${y}px;
        left: ${x}px;
      "
    >
      <span class="circle__label">${label}</span>
    </div>
  `

  document.body.insertAdjacentHTML('beforeend', circleElementMarkup)
}

document.addEventListener('pointerdown', (event) => {
  console.log(event)

  const { x, y, isPrimary, pointerId } = event

  addCircleElement(x, y, isPrimary, pointerId)
})
