// const boxes = document.querySelector(".boxes");
// // boxes.childNodes[1].remove();
// const firstBox = document.getElementById("first");

// const parent = document.querySelector(".boxes");

// // for (let idx = 0; idx < boxes.length; idx++) {
// // 	const box = boxes[idx];
// // 	box.addEventListener("click", () => box.remove());
// // }

// // for (let children of parent.children) {
// // 	children.addEventListener("click", () => children.remove());
// // }

// const boxes = document.querySelectorAll(".box");
// // const parent = document.getElementById("parent");

// for (let box of boxes) {
// 	box.addEventListener("click", () => {
// 		console.log(box.previousElementSibling);
// 	});
// }

const btn = document.querySelector("button");
const html = `
     <div class="boxes">
        <div class="box">Box-1</div>
        <div class="box">Box-2</div>
        <div class="box">Box-3</div>
     </div>
`;

btn.onclick = () => {
	document.body.innerHTML = html;
};
