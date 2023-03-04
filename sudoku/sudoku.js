const cells = document.querySelectorAll(".cell");
const nums = document.querySelectorAll(".num");

let currentCell;
// Render functions

function renderRandomCells() {
	const count = random(40, 20);
	// cells[0].classList.add("active");
	for (let i = 0; i < count; i++) {
		const randomIdx = random(80);
		const value = random(9, 1);
		const cell = cells[randomIdx];
		if (cell.innerText !== "") {
			i--;
		} else {
			cell.innerText = value;
			cell.classList.add("random");
		}
	}
}

function addCellListeners() {
	for (let cell of cells) {
		cell.addEventListener("click", () => {
			currentCell?.classList?.remove("active");
			currentCell = cell;
			cell.classList.add("active");
		});
	}
}

function addNumListeners() {
	for (let num of nums) {
		num.addEventListener("click", () => {
			if (!currentCell.classList.contains("random")) {
				currentCell.innerText = num.innerText;
			}
		});
	}
}

function addKeyboardEvent() {
	window.addEventListener("keydown", (e) => {
		if (1 <= +e.key && +e.key < 9) {
			if (!currentCell?.classList?.contains("random")) {
				currentCell.innerText = e.key;
			}
		}
	});
}

// Logic function
function random(end, start = 0) {
	return start + Math.floor(Math.random() * (end - start + 1));
}

// start function

function init() {
	renderRandomCells();
	addCellListeners();
	addNumListeners();
	addKeyboardEvent();
}

init();
