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


let cellList = document.querySelectorAll('.cell')

cellList.forEach((block) => {
	console.log("test");
	block.addEventListener('mouseover', (e) => {
		block.classList.add('activated');
		console.log("test");
	})
	block.addEventListener('mouseout', (e) => {
		setTimeout(function() {
			block.classList.remove('activated');
		}, 2500);
	})
})