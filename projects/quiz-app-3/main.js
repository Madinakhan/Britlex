import { randomNumber, interval } from "./utils.js";
// DOM VARIABLES
const operationElm = document.getElementById("operation");
const number_1 = document.getElementById("number_1");
const number_2 = document.getElementById("number_2");
const answersContent = document.querySelector(".answers_content");
const timeElm = document.querySelector(".time");
const orderElm = document.querySelector(".order");
const incorrectElm = document.querySelector(".incorrect");
const correctElm = document.querySelector(".correct");
const timedElm = document.querySelector(".timed");

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
		answers[i] = answer;
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

function init(extraTime) {
	try {
		const question = generateQuestion();
		renderGame(question, extraTime);
	} catch (err) {
		alert(err.message);
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
	renderQuestion(question);
	const controller = renderTimer(init, extraTime);
	renderAnswers(answers, correctAnswer, controller);
}

function renderInfo() {
	const tempQuestions = questions.slice(0, questions.length - 1);
	const { correct, incorrect, timed } = tempQuestions.reduce(
		(acc, { status }) => {
			acc[status]++;
			return acc;
		},
		{ correct: 0, incorrect: 0, timed: 0 }
	);

	orderElm.innerText = questions.length;
	correctElm.innerText = correct;
	incorrectElm.innerText = incorrect;
	timedElm.innerText = timed;
}

function renderQuestion({ number1, number2, operation }) {
	number_1.innerText = number1;
	number_2.innerText = number2;
	operationElm.innerText = operation;
	renderInfo();
}

function renderAnswers(answers, correctAnswer, controller) {
	[...answersContent.children].forEach((elm) => elm.remove());

	const fragment = document.createDocumentFragment();
	for (let answer of answers) {
		const answerBtn = document.createElement("button");
		answerBtn.innerText = answer;
		const isCorrect = answer === correctAnswer;
		if (isCorrect) answerBtn.style.background = "red";

		function handleAnswer() {
			answerBtn.style.background = isCorrect ? "green" : "red";
			controller.clear();
			if (isCorrect) {
				question.status = "correct";
				init(controller.time);
			} else {
				question.status = "incorrect";
				init(-2);
			}
		}

		answerBtn.addEventListener("click", handleAnswer);
		fragment.appendChild(answerBtn);
	}
	answersContent.appendChild(fragment);
}

// HANDLER FUNCTIONS

init();
