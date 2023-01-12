// const text = document.createTextNode("PDP G-8");
// text.textContent = "PDP G-7";
// console.log(text);

// const images = document.getElementById("images");

// images.appendChild(createImgElement("https://picsum.photos/200/300"));
// images.appendChild(createImgElement("https://picsum.photos/400/300"));
// images.appendChild(createImgElement("https://picsum.photos/200/600"));
// images.appendChild(createImgElement("https://picsum.photos/500/300"));

// function createImgElement(imgURL) {
// 	const img = document.createElement("img");

// 	img.src = imgURL;

// 	return img;
// }

// const boxes = document.getElementById("boxes");
// const oldBox = document.querySelector(".box");
// // for (let num of [1, 2, 3, 4, 5]) {
// // 	const box = document.createElement("div");
// // 	box.innerText = `Box-${num}`;
// // 	box.className = "box";
// // 	boxes(box, oldBox);
// // }

// const title = document.createElement("h1");
// title.innerText = "PDP G-7 EXAMINE-4";
// setTimeout(() => {
// 	boxes.remove();
// }, 2000);

const img = document.querySelector("img");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
	const isExist = img.hasAttribute("class");

	if (isExist) {
		img.removeAttribute("class");
		btn.innerText = "Start";
	} else {
		img.classList.add("scale_animation");
		// img.setAttribute("class", "scale_animation");
		btn.innerText = "End";
	}
});
