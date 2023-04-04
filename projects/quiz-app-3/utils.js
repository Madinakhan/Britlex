export function randomNumber(max, min = 0) {
	return Math.floor(Math.random() * (max - min)) + min;
}

export function interval(fn, time) {
	const intervalID = setInterval(fn, time);

	return () => clearInterval(intervalID);
}
