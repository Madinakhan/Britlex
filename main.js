"use strict";

/** ---------- 02.03.23 ----------(68) */
// console.log("Lesson-68");

// const father = document.createElement("div");
// father.setAttribute("class", "parent");
// const box = document.createElement("div");
// box.classList = "i_am_box men_boxman";
// const text = document.createTextNode("👋🏻 Box 👋🏻");
// box.appendChild(text);

// const btn = document.createElement("button");
// btn.innerText = "Toggle";

// father.appendChild(box);
// father.appendChild(btn);
// document.body.appendChild(father);

// console.log(box.classList);

// btn.addEventListener("click", function () {
// 	box.classList.toggle("box");
// 	if (box.classList.contains("box")) {
// 		box.classList.remove("box");
// 	} else {
// 		box.classList.add("box");
// 	}
// });

// const father = document.querySelector(".parent");

// function createElement(count = 1000) {
// 	console.time();
// 	for (let i = 1; i <= count; i++) {
// 		const div = document.createElement("div"); // HM_0001
// 		div.innerText = `I am box-${i}`;
// 		father.appendChild(div);
// 	}
// 	console.timeEnd();
// }

// function innerHTML(count = 1000) {
// 	console.time();
// 	for (let i = 1; i <= count; i++) {
// 		father.innerHTML += `<div>I am box-${i}</div>`;
// 	}
// 	console.timeEnd();
// }

// createElement(10);
// innerHTML(10);

// const person = {
// 	name: "Kent",
// 	age: 35,
// };
// const person2 = {
// 	name: "Mark",
// 	age: 30,
// };
// person2.age = 60;
// const nums = [person, person2, person2, person, person, person2, person];
// const news = new Set(nums);
// console.log(news);

// const btn = document.getElementById("btn");
// const removeBtn = document.getElementById("remove_btn");

// function handleClick1() {
// 	console.log("box clicked");
// }

// function handleClick2() {
// 	console.log("box clicked two");
// }

// function handleClickRemoveBtn() {
// 	console.log("clicked remove btn");
// 	btn.removeEventListener("mousemove", handleClick1);
// }

// btn.addEventListener("mousemove", handleClick1);
// btn.addEventListener("mousemove", handleClick2);
// removeBtn.addEventListener("mousemove", handleClickRemoveBtn);

// const person = {
// 	name: "kent",
// 	age: 20,
// };

// console.log(person);
// delete person.age;
// console.log(person);

// const event = new MouseEvent("application");
// console.dir(event.__proto__);
// console.dir(event.__proto__.__proto__);
// console.dir(event.__proto__.__proto__.__proto__);
// console.dir(event.__proto__.__proto__.__proto__.__proto__);
// console.dir(event.__proto__.__proto__.__proto__.__proto__.__proto__);

// const box = document.querySelector(".box");
// const nums = [-1, 1];
// box.addEventListener("mouseenter", function (event) {
// 	const xPosition = nums[Math.floor(Math.random() * 2)] * Math.floor(Math.random() * 200) + event.clientX;
// 	const yPosition = nums[Math.floor(Math.random() * 2)] * Math.floor(Math.random() * 200) + event.clientY;
// 	console.log("x = ", xPosition);
// 	console.log("y = ", yPosition);

// 	box.style.left = xPosition + "px";
// 	box.style.top = yPosition + "px";
// });

// const loginForm = document.getElementById("login-form");
// const username = document.getElementById("username");
// const password = document.getElementById("password");

// loginForm.addEventListener("submit", (e) => {
// 	e.preventDefault();
// 	const data = { username: username.value, password: password.value };
// 	console.log("data = ", data);
// });

// loginForm.addEventListener("reset", (e) => {
// 	console.log("value = ", e);
// });

// username.addEventListener("focus", (e) => {
// 	// e.target.remove();
// });

// username.addEventListener("blur", (e) => {
// 	console.log("input dan chiqdi");
// });

// const box = document.querySelector(".box");
// const a = document.querySelector(".a");
// const b = document.querySelector(".b");
// const c = document.querySelector(".c");

// box.addEventListener("click", (e) => {
// 	console.log("Clicked box");
// 	e.stopPropagation();
// });
// a.addEventListener("click", () => {
// 	console.log("Clicked a btn");
// });
// b.addEventListener("click", () => {
// 	console.log("Clicked b btn");
// });
// c.addEventListener("click", () => {
// 	console.log("Clicked c btn");
// });
