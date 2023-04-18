const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
	btn.addEventListener("click", () => {
		console.log(btn.dataset);
	});
});
