export function randomNumber(end, start = 1) {
	const result = start + Math.floor(Math.random() * (end - start + 1));
	return result;
}
