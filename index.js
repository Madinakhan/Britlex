"use strict";

/** ---------- 25.02.23 ----------(66) */

// const boxes = document.querySelector(".boxes");
// console.log(boxes.childNodes);

// for (let element of boxes.children) {
// 	console.log("element: ", element);
// }

// const first = document.getElementById("first");

// console.log(first.nextElementSibling);
// console.log(first.nextElementSibling.nextElementSibling);
// console.log(first.nextElementSibling.nextElementSibling.nextElementSibling);

const hexes = document.querySelector(".hexes");
const addBtn = document.getElementById("add_btn");

function generateColor() {
	return "#" + Math.random().toString(16).substring(2, 8);
}

addBtn.addEventListener("click", function () {
	const hex = document.createElement("div");
	hex.classList.add("hex");
	const color = generateColor();
	hex.innerText = color;
	hex.style = `--color: ${color}`;

	hex.addEventListener("click", function () {
		document.body.style.backgroundColor = color;
	});

	hexes.appendChild(hex);
});
