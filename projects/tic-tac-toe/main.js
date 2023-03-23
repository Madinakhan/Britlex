"use strict";

const container = document.querySelector(".container");

let list = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function checkWinner(board) {
	console.log("board = ", board);
	let isWinner = false;
	let isFinished = board.filter((item) => item).length === 9;
	for (let [a, b, c] of list) {
		const first = board[a] || NaN;
		const second = board[b] || NaN;
		const third = board[c] || NaN;

		if (first === second && second === third) {
			isWinner = true;
			break;
		}
	}

	return [isWinner, isFinished];
}

function handleClick(cell, board, idx, player, win, cells) {}

function init() {
	const x = Math.floor(Math.random() * 20) || 4;
	const y = Math.floor(Math.random() * 20) || 4;

	for (let i = 0; i < x * y; i++) {
		addBoard();
	}
	container.style.gridTemplateRows = `repeat(${x}, 1fr)`;
	container.style.gridTemplateColumns = `repeat(${y}, 1fr)`;
	const boards = document.querySelectorAll(".board");

	boards.forEach((_board) => {
		let player = "X";
		let board = [];
		const cells = _board.querySelectorAll(".cell");
		const win = document.createElement("div");
		win.classList.add("winner");

		cells.forEach((cell, idx) => {
			cell.addEventListener("click", () => {
				if (cell.innerText === "") {
					board[idx] = player;
					cell.innerText = player;

					const [isWinner, isFinished] = checkWinner(board); // []

					if (isWinner) {
						console.log("winner");
						win.innerText = player;
						_board.appendChild(win);
						_board.style.pointerEvents = "none";
					}
					if (isFinished) alert("===");
					player = player === "X" ? "O" : "X";
				}
			});
		});
	});
}

function addBoard() {
	const board = document.createElement("div");
	board.classList.add("board");
	for (let i = 0; i < 9; i++) {
		const cell = document.createElement("div");
		cell.classList.add("cell");
		board.appendChild(cell);
	}
	container.appendChild(board);
}

init();
