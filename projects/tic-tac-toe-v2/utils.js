const wrapper = document.querySelector(".wrapper");

export function renderBoard(board = []) {
	const fragment = document.createDocumentFragment();

	for (let i = 0; i < board.length; i++) {
		const item = board[i];

		const cell = document.createElement("div");
		cell.classList.add("cell");
		cell.innerText = item || "";
		cell.addEventListener("click", (e) => handleClick(e, i));

		fragment.appendChild(cell);
	}

	wrapper.appendChild(fragment);
}
