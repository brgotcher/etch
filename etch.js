//create "clear board" button
let btn = document.createElement('button');
btn.textContent = "Clear the board";
let body = document.querySelector('body');
const container = document.querySelector('#container');
body.insertBefore(btn, container);
//default grid on page load is 16x16
let number = 16;
//creating variables for use in functions
let row;
let cell;
/*pick a random number between 0 and 255, to be used for
RGB values on moused over cells*/
function randomColor() {
	let rgbNum = Math.floor(Math.random() * 256);
	return rgbNum;
}


//builds the grid
function buildGrid(num) {
	/*sizeH variable accounts for the grid growing and shrinking
	when the number of cells changes due to the margins- 1px
	between each cell*/
	let sizeH = (1000 - num) / num;
	/*same as sizeH but had to account for side-by-side margins
	adding up instead of overlapping as they do with top/bottom
	elements, so there are 2px between each*/
	let sizeW = (1000 - (2 * num)) / num;
	//iterate to create row divs
	for (let i = 0; i < num; i++) {
		row = document.createElement('div');
		row.classList.add('row');
		//uses sizeH variable to set height of rows
		row.style.height = `${sizeH}px`;
		container.appendChild(row);
		//iterates within each row div- these are the actual cells
		for (let j = 0; j < num; j++) {
			cell = document.createElement('div');
			cell.classList.add('cell');
			//uses sizeW variable to set width of cells
			cell.style.width = `${sizeW}px`;
			row.appendChild(cell);
		}
	}
	//create nodelist of all cells
	let cellList = document.querySelectorAll('.cell')
	//event listener in each cell for mouseover
	cellList.forEach((block) => {
		block.addEventListener('mouseover', (e) => {
			//when moused over, cell turns random color
			block.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
		})
	})
}
//finally run the function to build the initial 16x16 grid
buildGrid(number);


//sets click listener to activate button
btn.addEventListener('click', (e) => {
	//empties container div, removing old grid completely
	container.innerHTML = "";
	//need to phrase this better
	number = prompt("What size grid would you like? " + 
		"Choose a number between 10 and 100 for best results.");
	//builds new grid using number provided by user
	buildGrid(number);
})