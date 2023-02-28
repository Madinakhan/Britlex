const monitor = document.querySelector("#monitor");
const allButtons = document.getElementsByTagName("button");

function calculate(key) {
	switch (key.toLowerCase()) {
		case "c":
			monitor.value = "";
			break;
		case "d":
			monitor.value = monitor.value.slice(0, -1);
			break;
		case "=":
			try {
				monitor.value = eval(monitor.value);
			} catch (error) {
				monitor.value = "Invalid math operation";
			}
			break;
		default:
			monitor.value += key;
			break;
	}
}

for (let button of allButtons) {
	button.addEventListener("click", function () {
		calculate(button.innerText);
	});
}

window.addEventListener("keydown", function (e) {
	for (let button of allButtons) {
		if (button.innerText.toLowerCase() === e.key) {
			button.classList.add("active");
			calculate(e.key);
		} else {
			button.classList.remove("active");
		}
	}
});

window.addEventListener("keyup", function (e) {
	for (let button of allButtons) {
		if (button.innerText.toLowerCase() === e.key) {
			button.classList.remove("active");
		}
	}
});
