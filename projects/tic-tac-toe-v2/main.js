"use strict";

const game = document.querySelector(".game");
const historiesElm = document.querySelector(".histories");

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

const histories = [[null, null, null, null, null, null, null, null, null]];
let step = 0;

function nextPlayer() {
	const currentPlayer = step % 2 === 0 ? "X" : "O";
	step++;
	return currentPlayer;
}

function handleCell(idx) {
	const currentPlayer = nextPlayer();

	const currentHistory = histories[step];
	if (currentHistory) histories.splice(step);

	const newHistory = [...histories[step - 1]];
	newHistory[idx] = currentPlayer;
	histories.push(newHistory);

	renderBoard();
	renderHistories();
}

function handleReset() {
	step = 0;
	histories.splice(1);
	renderBoard();
	renderHistories();
}

function handleHistory(idx) {
	step = idx;

	renderBoard();
	renderHistories();
}

function renderBoard() {
	const board = histories[step];

	const wrapper = document.createElement("div");
	wrapper.classList.add("wrapper");

	for (let i = 0; i < board.length; i++) {
		const item = board[i];

		const cell = document.createElement("button");
		cell.classList.add("cell");
		cell.innerText = item || "";
		cell.disabled = !!item;
		cell.addEventListener("click", () => handleCell(i));

		wrapper.appendChild(cell);
	}

	const resetBtn = document.createElement("button");
	resetBtn.innerText = "Reset";
	resetBtn.addEventListener("click", handleReset);

	[...game.children].forEach((item) => item.remove());
	game.append(wrapper, resetBtn);
}

function renderHistories() {
	const fragment = document.createDocumentFragment();

	[...historiesElm.children].forEach((elm) => elm.remove());
	histories.forEach((history, idx) => {
		const btn = document.createElement("button");
		let text = idx === 0 ? "Go to game start" : `Go to move #${idx}`;
		if (step === idx) {
			btn.disabled = true;
			btn.innerText = text + " (current)";
		} else {
			btn.innerText = text;
		}
		btn.addEventListener("click", () => handleHistory(idx));
		fragment.appendChild(btn);
	});

	historiesElm.appendChild(fragment);
}

function init() {
	renderHistories();
	renderBoard();
}

init();
