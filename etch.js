
const test = 1;
const container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
	let row = document.createElement('div');
	row.classList.add('row');
	container.appendChild(row);
	for (let j = 0; j < 16; j++) {
		let cell = document.createElement('div');
		cell.classList.add('cell');
		row.appendChild(cell);
	}
}

