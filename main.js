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

// const hexes = document.querySelector(".hexes");
// const addBtn = document.getElementById("add_btn");

// function generateColor() {
// 	return "#" + Math.random().toString(16).substring(2, 8);
// }

// addBtn.addEventListener("click", function () {
// 	const hex = document.createElement("div");
// 	hex.classList.add("hex");
// 	const color = generateColor();
// 	hex.innerText = color;
// 	hex.style = `--color: ${color}`;

// 	hex.addEventListener("click", function () {
// 		document.body.style.backgroundColor = color;
// 	});

// 	hexes.appendChild(hex);
// });

/** ---------- 28.02.23 ----------(67) */
// function init() {
// 	const element = document.createElement("div");
// 	element.innerHTML = "<h1>Hello World</h1>";

// 	console.log(element);
// }

// init();

const first = document.createElement("div");
first.innerText = "First Div";

const second = document.createElement("div");
second.innerText = "Second Div";

const third = document.createElement("div");
third.innerText = "----Third Div----";

const four = document.createElement("div");
four.innerText = "----Four Div----";

document.body.appendChild(second);

console.log(document.body.children[2] === second);

console.dir(document);
