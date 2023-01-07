const btn = document.querySelector("button");

btn.innerText = "click me";
// btn.addEventListener("click", function () {
// 	const hex = randomHex();
// 	document.body.style.background = hex;
// });

function randomHex() {
	let chars = "0123456789abcdef";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		const ranIdx = Math.floor(Math.random() * chars.length);
		color += chars[ranIdx];
	}

	return color;
}

// #aabbee

// const div = document.createElement("div");
// div.innerText = "#efed40";
// document.body.appendChild(div);

document.body.innerHTML = `
 <div>
 <h1 id="title">Hello World</h1>
 <div>${randomHex()}</div>
 </div>
`;
