import { randomNumber, interval } from "./utils.js";
// DOM VARIABLES
const operationElm = document.getElementById("operation");
const number_1 = document.getElementById("number_1");
const number_2 = document.getElementById("number_2");
const answersContent = document.querySelector(".answers");
const timeElm = document.querySelector(".time");
const orderElm = document.querySelector(".order");
const incorrectElm = document.querySelector(".incorrect");
const correctElm = document.querySelector(".correct");
const timedElm = document.querySelector(".timed");
const startBtn = document.getElementById("start");
const gameZone = document.getElementById("game");
const resultZone = document.getElementById("result");
const pointsContent = document.querySelector(".points");

// CONSTANTS
const MAX_SIZE = 101;
const INTERVAL = 20;
const QUESTION_TIME = 5;
const QUESTION_COUNT = 5;

// LOGIC VARIABLES
const operations = ["+", "-", "*"];
const questions = [];
let question = null;

// LOGIC FUNCTIONS

function generateAnswers(correctAnswer) {
	const answers = [correctAnswer];

	for (let i = 1; i <= 3; i++) {
		const answer = randomNumber(correctAnswer + INTERVAL, correctAnswer - INTERVAL);
		if (answers.includes(answer)) i--;
		else answers[i] = answer;
	}

	return answers.sort(() => Math.random() - 0.5);
}

function generateQuestion() {
	if (questions.length === QUESTION_COUNT) throw new Error("Finished");
	const number1 = randomNumber(MAX_SIZE);
	const number2 = randomNumber(MAX_SIZE);
	const operation = operations[randomNumber(operations.length)];
	const correctAnswer = eval(`${number1} ${operation} ${number2}`);
	const answers = generateAnswers(correctAnswer);

	question = {
		number1,
		number2,
		operation,
		correctAnswer,
		answers,
		selectedAnswer: null,
		status: "timed",
	};

	questions.push(question);
	return question;
}

function start(extraTime) {
	try {
		const question = generateQuestion();
		renderGame(question, extraTime);
	} catch (err) {
		renderPoints();
		gameZone.classList.add("hide");
		renderResult();
		resultZone.classList.remove("hide");
	}
}

// RENDER FUNCTIONS
function renderTimer(timedFn, extraTime = 0) {
	const controller = {
		time: QUESTION_TIME + extraTime,
		clear: interval(handleTimer, 1000),
	};

	timeElm.innerText = controller.time;

	function handleTimer() {
		if (controller.time === 0) {
			controller.clear();
			timedFn();
		} else timeElm.innerText = --controller.time;
	}

	return controller;
}

function renderGame({ answers, correctAnswer, ...question }, extraTime) {
	renderPoints();
	renderQuestion(question);
	renderInfo();
	const controller = renderTimer(start, extraTime);
	renderAnswers(answers, correctAnswer, controller);
}

function renderInfo() {
	const tempQuestions = questions.slice(0, questions.length - 1);
	const correctCount = tempQuestions.filter(({ status }) => status === "correct").length;
	const incorrectCount = tempQuestions.filter(({ status }) => status === "incorrect").length;
	const timedCount = tempQuestions.filter(({ status }) => status === "timed").length;

	orderElm.innerText = questions.length;
	correctElm.innerText = correctCount;
	incorrectElm.innerText = incorrectCount;
	timedElm.innerText = timedCount;
}

function renderQuestion({ number1, number2, operation }) {
	number_1.innerText = number1;
	number_2.innerText = number2;
	operationElm.innerText = operation;
}

function renderAnswers(answers, correctAnswer, controller) {
	[...answersContent.children].forEach((elm) => elm.remove());

	const fragment = document.createDocumentFragment();

	for (let answer of answers) {
		const answerBtn = document.createElement("button");
		answerBtn.innerText = answer;
		answerBtn.className = "btn";

		const isCorrect = answer === correctAnswer;
		if (isCorrect) answerBtn.classList.add("correct");

		function handleAnswer() {
			const status = isCorrect ? "correct" : "incorrect";
			answerBtn.classList.add(status);
			question.status = status;
			controller.clear();
			start(isCorrect ? controller.time : -2);
		}

		answerBtn.addEventListener("click", handleAnswer);
		fragment.appendChild(answerBtn);
	}

	answersContent.appendChild(fragment);
}

function renderPoints() {
	if (questions.length < 2) return;
	const { status } = questions[questions.length - 2];
	const pointBtn = document.createElement("div");
	pointBtn.className = `point ${status}`;
	pointsContent.appendChild(pointBtn);
	pointBtn.innerText = questions.length - 1;
}

function renderResult() {
	const points = document.createElement("div");
	const obj = {
		correct: questions.filter(({ status }) => status === "correct").length,
		incorrect: questions.filter(({ status }) => status === "incorrect").length,
		timed: questions.filter(({ status }) => status === "timed").length,
	};
	for (let status in obj) {
		const point = document.createElement("li");
		point.className = `point ${status}`;
		point.innerText = obj[status];
		points.appendChild(point);
	}

	const showResultBtn = document.createElement("button");
	showResultBtn.className = "btn";
	showResultBtn.innerText = "Show result";

	showResultBtn.addEventListener("click", handleShowResult);
	resultZone.append(points, showResultBtn);
}

// HANDLER FUNCTIONS

function handleShowResult() {
	gameZone.style.pointerEvents = "none";
	gameZone.classList.remove("hide");
	resultZone.classList.add("hide");
}
startBtn.onclick = () => {
	startBtn.classList.add("hide");
	start();
	gameZone.classList.remove("hide");
};
