"use strict";

const boxes = document.querySelectorAll(".box");

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
	boxes.forEach((box) => {
		let player = "X";
		let board = [];
		const cells = box.querySelectorAll(".cell");
		const win = box.querySelector(".win");

		cells.forEach((cell, idx) => {
			cell.addEventListener("click", () => {
				if (cell.innerText === "") {
					board[idx] = player;
					cell.innerText = player;

					const [isWinner, isFinished] = checkWinner(board); // []

					if (isWinner) {
						console.log("winner");
						win.innerText = player;
						cells.forEach((cell) => (cell.style.pointerEvents = "none"));
					}
					if (isFinished) alert("===");
					player = player === "X" ? "O" : "X";
				}
			});
		});
	});
}

init();
