"use strict";
import { timeConvertor } from "./utils.js";
const timer = document.querySelector(".main-time");
const menu = document.querySelector(".main-menu");
const startBtn = document.getElementById("startBtn");

let time = 1500;
let intervalID;

// ui functions
function handleStart() {
	const isActive = startBtn.classList.contains("active");
	startBtn.classList.toggle("active");
	startBtn.innerText = isActive ? "START" : "PAUSE";

	const value = timeConvertor(time);
	if (isActive) {
		clearInterval(intervalID);
	} else {
		intervalID = setInterval(() => {
			time--;
			timer.innerText = timeConvertor(time);
		}, 1000);
	}
}

function handleActionBtnClick(actionBtn) {
	const currentTime = +actionBtn.getAttribute("time");
	const isActive = actionBtn.classList.contains("active");

	if (!isActive) {
		const isYes = startBtn.classList.contains("active") ? confirm(`${actionBtn.innerText} 🧐 ? `) : true;

		if (isYes) {
			for (let btn of actionBtns) {
				btn.classList.remove("active");
			}

			clearInterval(intervalID);
			time = currentTime;
			timer.innerText = timeConverter(time);
			startBtn.classList.remove("active");
			startBtn.innerText = `START`;
			actionBtn.classList.add("active");
		}
	}
}

function init() {
	startBtn.addEventListener("click", handleStart);

	menu.addEventListener("click", (event) => {
		const target = event.target;

		if (target.classList.contains("main-menu-item")) {
			handleActionBtnClick(target);
		}
	});
}

init();
