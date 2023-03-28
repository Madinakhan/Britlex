export function getList(items, size = 0) {
	let result = [];

	for (let i = 0; i < size; i++) {
		const randomIdx = Math.floor(Math.random() * items.length);
		const item = items[randomIdx];
		const isExist = result.includes(item);
		if (isExist) i--;
		else result.push(item);
	}

	console.log("result = ", result);

	return result;
}
