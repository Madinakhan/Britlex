const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const title = document.getElementById("title");

leftBtn.addEventListener("click", function () {
	let innerText = title.innerText;

	const idx = innerText.indexOf("-");
	let counter = innerText.substring(idx + 1) - 1;

	title.innerText = `Lesson-${counter}`;
});

rightBtn.addEventListener("click", function () {
	let innerText = title.innerText;

	const idx = innerText.indexOf("-");
	let counter = +innerText.substring(idx + 1) + 1;

	title.innerText = `Lesson-${counter}`;
});

const result = "10" - 1; // 9
