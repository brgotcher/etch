
let btn = document.createElement('button');
btn.textContent = "Clear the board";
let body = document.querySelector('body');
const container = document.querySelector('#container');
body.insertBefore(btn, container);
let number = 16;
let row;
let cell;

function buildGrid(num) {
	let size = 1000 / num;
	for (let i = 0; i < num; i++) {
		row = document.createElement('div');
		row.classList.add('row');
		row.style.height = `${size}px`;
		container.appendChild(row);
		for (let j = 0; j < num; j++) {
			cell = document.createElement('div');
			cell.classList.add('cell');
			cell.style.width = `${size}px`;
			row.appendChild(cell);
		}
	}
	let cellList = document.querySelectorAll('.cell')
	cellList.forEach((block) => {
		block.addEventListener('mouseover', (e) => {
			block.classList.add('activated');
		})
	})
}

buildGrid(number);



btn.addEventListener('click', (e) => {
	console.log("test");
	container.innerHTML = "";
	number = prompt("What size grid would you like?");
	buildGrid(number);
})