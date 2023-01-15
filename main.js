const btn = document.querySelector("button");
// btn.onmouseenter = function () {
// 	console.log("ENTER");
// };
// btn.onmouseleave = function () {
// 	console.log("LEAVE");
// };

btn.addEventListener("mouseenter", function () {
	console.log("ENTER-1");
});

btn.addEventListener("mouseenter", function () {
	console.log("ENTER-2");
});

btn.addEventListener("mouseleave", function () {
	console.log("LEAVE");
});
// btn.addEventListener("click", () => {
// 	if (btn.classList.contains("btn-success")) {
// 		btn.classList.replace("btn-success", "btn-danger");
// 	} else btn.classList.replace("btn-danger", "btn-success");
// });
// btn.addEventListener("click", () => {
// btn.style.background = "rgb(217, 24, 24)";
// btn.style.color = "#fff";
// });

// const items = document.querySelectorAll(".list-item");

// for (let item of items) {
// 	item.addEventListener("click", () => {
// item.classList.toggle("list-item", );
// const isExistClass = item.hasAttribute("class");
// if (isExistClass) {
// 	item.removeAttribute("class");
// } else {
// 	item.setAttribute("class", "list-item");
// }
// 	});
// }
// for (let item of items) {
// 	item.addEventListener("click", () => {
// 		item.classList.toggle("big");
// 	});
// }
