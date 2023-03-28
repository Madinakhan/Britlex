import { getList } from "./utils.js";
const cells = document.querySelectorAll(".cell");
const board = document.createElement("div");
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const answers = getList(list, 6);
let counter = 0;

// RENDER FUNCTIONS
function renderBoard() {
	document.body.children[0].remove();

	board.className = "board";

	for (let item of list) {
		const isHide = answers.includes(item);
		const cell = document.createElement("div");
		cell.className = "cell";

		if (isHide) {
			cell.classList.add("show", "correct");
		}

		board.appendChild(cell);
		cell.addEventListener("click", (e) => handleCell(e.target, item));
	}

	document.body.appendChild(board);
}

renderBoard();

// HANDLE FUNCTIONS
function handleCell(currentCell, item) {
	const isCorrect = answers.includes(item);

	if (isCorrect) {
		currentCell.classList.add("active");
		counter++;

		if (counter === answers.length) {
			board.style.pointerEvents = "none";
		}
	} else {
		currentCell.classList.add("error");
		board.style.pointerEvents = "none";
		const correctElements = board.querySelectorAll(".correct");
		correctElements.forEach((elm) => elm.classList.add("active"));
	}
}
