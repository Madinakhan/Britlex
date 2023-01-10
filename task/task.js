const cells = document.querySelectorAll(".cell");
const title = document.querySelector(".title");

function randomHex() {
	let chars = "0123456789abcdef";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		const ranIdx = Math.floor(Math.random() * chars.length);
		color += chars[ranIdx];
	}

	return color;
}

function init() {
	for (let cell of cells) {
		const color = randomHex();
		cell.style.background = color;
		cell.innerText = color;

		cell.addEventListener("click", (event) => {
			document.body.style.background = event.target.innerText;
			title.innerText = cell.innerText;
		});
	}
}

init();
