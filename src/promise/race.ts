/* PROMISE */

function createPromise(num: number) {
	return new Promise<number>((res, rej) => {
		setTimeout(() => {
			if (num === 3) rej(new Error("Error created at num 3"));
			res(num);
		}, num * 1000);
	});
}

function init() {
	const promises: Promise<number>[] = [];

	for (let i = 1; i <= 5; i++) {
		const promise = createPromise(i);
		promises.push(promise);
	}

	Promise.race(promises)
		.then((values) => {
			console.log("values = ", values);
		})
		.catch((err: Error) => {
			console.log(`[ERROR][❌]  ${err.message}`);
		});
}

init();
