import { getList } from "./utils.js";
const cells = document.querySelectorAll(".cell");
const board = document.createElement("div");
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let answers = getList(list, 6);
let counter = 0;

// RENDER FUNCTIONS
function renderBoard() {
	[...document.body.children].forEach((elm) => elm.remove());
	board.className = "board";
	const count = list.length ** 0.5;
	board.style.gridTemplateColumns = `repeat(${count}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${count}, 1fr)`;

	for (let item of list) {
		const isHide = answers.includes(item);
		const cell = document.createElement("div");
		cell.className = "cell";

		if (isHide) {
			cell.classList.add("show", "correct");
		}

		board.appendChild(cell);
		cell.onclick = () => handleCell(cell, item);
	}

	const levelBtn = document.createElement("button");
	levelBtn.innerText = "Level Up 🔝";
	levelBtn.addEventListener("click", handleLevel);
	document.body.append(board, levelBtn);
}

// renderBoard();

// HANDLE FUNCTIONS
function handleLevel() {
	list = new Array(25).fill().map((item, idx) => idx + 1);
	answers = getList(list, 5);
	renderBoard();
}
function handleCell(currentCell, item) {
	const isCorrect = answers.includes(item);

	if (isCorrect) {
		currentCell.classList.add("active");
		counter++;

		if (counter === answers.length) {
			board.classList.add("winner");
		}
	} else {
		currentCell.classList.add("error");
		board.classList.add("failed");
		const correctElements = board.querySelectorAll(".correct");
		correctElements.forEach((elm) => elm.classList.add("active"));
	}
}

/**
 * HM_0001 = [HM_0002, HM_0003]
 * HM_0002 = [20,10,3]
 * HM_0003 = [4,5,6]
 * HM_0004 = [8,9,10]
 *
 */
// const nums = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// ]; // SM_nums_001 = HM_0001

// let num = nums[1]; // SM_num_002 = HM_0003
// num = [8, 9, 10]; // SM_num_002 = HM_0004
// num = nums[0]; // SM_num_002 = HM_0002
// num[0] = 20; // HM_0002[0] =
// num[1] = 10;

// console.log(nums); // [[20,10,3], [4,5,6]]

// const users = [
// 	{ id: 123, name: "Kent", age: 20 },
// 	{ id: 124, name: "Mark", age: 30 },
// ];

// let newUser = users[0];
// newUser = users[1];
// newUser.age = 40;
// newUser.name = "Jon";

// users[2] = newUser;
// console.log(users); //

