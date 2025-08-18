const board = document.getElementById('board');
const color = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUERES_NUMBER = 500;

// for (let i = 0; i < SQUERES_NUMBER; i++) {
//   const square = document.createElement('div');
//   square.classList.add('squere');

//   square.addEventListener('mouseover', () => setColor(square));

//   square.addEventListener('mouseleave', () => removeColor(square));

//   board.append(square);
// }

// function setColor(element) {
//   const color = gerRandomColor();
//   element.style.backgroundColor = color;
//   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
// }

// function removeColor(element) {
//   element.style.backgroundColor = '#1d1d1d';
//   element.style.boxShadow = '0 0 2px #000';
// }

for (let i = 0; i < SQUERES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('squere');

  square.addEventListener('mouseover', setColor);

  square.addEventListener('mouseleave', removeColor);

  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = gerRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

function gerRandomColor() {
  const index = Math.floor(Math.random() * color.length);
  return color[index];
}
