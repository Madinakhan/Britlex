function createList(limit) {
	return new Array(limit).fill().map((item, idx) => idx + 1);
}

const questions = createList(80).sort(() => Math.random() - 0.5);
const groups = ["web_developers", "senior_developers", "AI", "BDB", "tops"];

function find(questions = [], groups = []) {
	const result = {};
	for (let group of groups) {
		result[group] = questions.splice(0, 16);
	}
	return result;
}

console.log(find(questions, groups));
