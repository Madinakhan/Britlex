import { randomNumber } from "./utils.js";
import { FINISH_POINT, SWITCH_POINT } from "./constants.js";
// DOM VARIABLES
const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const dice = document.querySelector(".dice");
const players = document.querySelectorAll(".players");
const scores = document.querySelectorAll(".player-score");
const points = document.querySelectorAll(".point");
const names = document.querySelectorAll(".player-name");
let winPlayer = null;

// LOGIC VARIABLES
let currentPlayer = 0;

const name1 = prompt("Enter first player name");
const name2 = prompt("Enter second player name");

names[0].innerText = name1;
names[1].innerText = name2;

function togglePlayer() {
	currentPlayer = currentPlayer === 0 ? 1 : 0;
	winPlayer?.classList.remove("winner");
	players[0].classList.toggle("active");
	players[1].classList.toggle("active");
}

function handleRoll() {
	const num = randomNumber(6);
	dice.src = `./assets/images/${num}.png`;
	const point = points[currentPlayer];

	const isSwitch = num === SWITCH_POINT;

	point.innerText = isSwitch ? 0 : num + +point.innerText;
	if (isSwitch) togglePlayer();
}

function handleHold() {
	const point = points[currentPlayer];
	const score = scores[currentPlayer];

	const total = +point.innerText + +score.innerText;
	score.innerText = total;
	point.innerText = 0;

	if (total >= 100) {
		rollBtn.style.pointerEvents = "none";
		holdBtn.style.pointerEvents = "none";
		winPlayer = players[currentPlayer];
		winPlayer.classList.add("winner");
	} else {
		togglePlayer();
	}
}

function handleNew() {
	currentPlayer = 0;
	if (winPlayer) winPlayer.classList.remove("winner");
	players[0].classList.add("active");
	players[1].classList.remove("active");
	rollBtn.style.pointerEvents = "unset";
	holdBtn.style.pointerEvents = "unset";
	dice.src = "";
	for (let i = 0; i < 2; i++) {
		const point = points[i];
		const score = scores[i];

		point.innerText = 0;
		score.innerText = 0;
	}
}

// UI Functions
function addListeners() {
	rollBtn.addEventListener("click", handleRoll);
	holdBtn.addEventListener("click", handleHold);
	newBtn.addEventListener("click", handleNew);
	window.addEventListener("keydown", ({ metaKey, code }) => {
		const fun = metaKey ? handleHold : handleRoll;
		if (code === "Enter") fun();
	});
}

addListeners();
