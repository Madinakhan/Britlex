const btn = document.getElementById("add_btn");
const hexes = document.querySelector(".hexes");
function randomHex() {
	return "#" + Math.random().toString(16).substring(2, 8);
}
btn.addEventListener("click", () => {
	const button = document.createElement("button");
	const color = randomHex();
	button.innerText = color;
	button.style.background = color;

	hexes.appendChild(button);
});

button.addEventListener("click", () => {
	document.body.style.background = color;
});
