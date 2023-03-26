const icons = ["🥶", "🍓", "🎉", "🍒", "🥶", "🎉", "🎁", "👮🏻‍♂️", "🍓", "🍒", "🎁", "🥝", "🧠", "👮🏻‍♂️", "🧠", "🥝"].sort(() => Math.random() - 0.5);
const wrapper = document.querySelector(".wrapper");
let selected = [];

function handleCard(e) {
	e.target.classList.add("active");
	selected.push(e.target);

	const isTwo = selected.length === 2;
	if (isTwo) {
		const [card1, card2] = selected;
		const isMatch = card1.innerText === card2.innerText;

		if (isMatch) {
			card1.classList.replace("active", "find");
			card2.classList.replace("active", "find");
			return selected.splice(0, 2);
		}
	}

	const isThree = selected.length === 3;
	if (isThree) {
		const [card1, card2] = selected;
		card1.classList.remove("active");
		card2.classList.remove("active");
		selected.splice(0, 2);
	}
}

function renderCards() {
	const x = 6;
	const y = 5;

	const fragment = document.createDocumentFragment();

	for (let icon of icons) {
		const card = document.createElement("div");
		card.classList.add("card", "active");
		card.innerText = icon;
		card.addEventListener("click", handleCard);

		fragment.appendChild(card);
	}

	wrapper.appendChild(fragment);

	setTimeout(() => {
		for (let card of wrapper.children) {
			card.classList.remove("active");
		}
	}, 3000);
}

function init() {
	renderCards();
}

init();
