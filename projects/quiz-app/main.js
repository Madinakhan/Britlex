const number_1 = document.getElementById("number_1");
const number_2 = document.getElementById("number_2");
const operationElm = document.getElementById("operation");
const answersContent = document.querySelector(".answers_content");

const MAX_SIZE = 101;
const INTERVAL = 20;
const operations = ["+", "-", "*"];
// LOGIC FUNCTIONS
function randomNumber(max, min = 0) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function generateAnswers(correctAnswer) {
	const answers = [correctAnswer];

	for (let i = 1; i <= 3; i++) {
		const answer = randomNumber(correctAnswer + INTERVAL, correctAnswer - INTERVAL);
		answers[i] = answer;
	}

	return answers.sort(() => Math.random() - 0.5);
}

function generateQuestion() {
	const number1 = randomNumber(MAX_SIZE);
	const number2 = randomNumber(MAX_SIZE);
	const operation = operations[randomNumber(operations.length)];
	const correctAnswer = eval(`${number1} ${operation} ${number2}`);

	return {
		number1,
		number2,
		operation,
		correctAnswer,
		answers: generateAnswers(correctAnswer),
	};
}

function init() {
	const question = generateQuestion();
	renderGame(question);
}

// RENDER FUNCTIONS

function renderGame({ number1, number2, operation, answers, correctAnswer }) {
	number_1.innerText = number1;
	number_2.innerText = number2;
	operationElm.innerText = operation;

	[...answersContent.children].forEach((elm) => elm.remove());
	const fragment = document.createDocumentFragment();
	for (let answer of answers) {
		const answerBtn = document.createElement("button");
		answerBtn.innerText = answer;
		fragment.appendChild(answerBtn);
		answerBtn.addEventListener("click", (event) => handleAnswer(event, answer === correctAnswer));
	}
	answersContent.appendChild(fragment);
}

// HANDLER FUNCTIONS

function handleAnswer(event, isCorrect) {
	event.target.style.background = isCorrect ? "green" : "red";
	if (isCorrect) init();
}
init();
