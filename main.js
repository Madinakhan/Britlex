const heading = document.querySelector("h1");
const body = document.querySelector("body");
// heading.addEventListener("click", () => {
// 	const value = body.getAttribute("class"); // null | "yellow" | "red"
// 	if (value === "red") body.removeAttribute("class");
// 	else body.setAttribute("class", value ? "red" : "yellow");
// });
// heading.addEventListener("click", () => {
// 	const value = body.className; // null | "yellow" | "red"
// 	// console.log(value);

// 	if (body.classList.contains("red")) {
// 		body.classList.remove("red");
// 	} else {
// 		if (body.className === "yellow") {
// 			body.classList.replace("yellow", "red");
// 		} else {
// 			body.classList.add("yellow");
// 		}
// 	}
// });

/**
 * <body /> -> <body class='yellow'  /> 👍🏻
 * <body class='yellow' /> -> <body class='red' />
 * <body class='red' /> -> <body  />
 *
 */

// heading.onclick = () => {
// 	console.log("Hello Props");
// };

// heading.addEventListener("click", () => {
// 	console.log("Hello Listener - 1");
// });

// heading.addEventListener("mouseenter", () => {
// 	console.log("MOUSE ENTER");
// });
// heading.addEventListener("mouseleave", () => {
// 	console.log("MOUSE LEAVE");
// });
// heading.addEventListener("mouseout", () => {
// 	console.log("MOUSE OUT");
// });

// const inputs = document.querySelectorAll("input");

// for (let input of inputs) {
// 	input.addEventListener("focus", () => {
// 		input.classList.add("scale");
// 	});
// 	input.addEventListener("blur", () => {
// 		input.classList.remove("scale");
// 	});
// }

// const form = document.querySelector("form");

// form.addEventListener("submit", () => {
// 	alert("Hello World");
// });

// const _boxes = document.querySelector(".boxes");
// const box = document.querySelector(".box");

// console.log(box);

// box.addEventListener("click", (event) => {
// 	event.target.innerText = "Hello world";
// });
