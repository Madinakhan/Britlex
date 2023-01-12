const number1 = document.getElementById("number_1");
const number2 = document.getElementById("number_2");
const operation = document.getElementById("operation");
const answersContent = document.querySelector(".answers_content");

const MAX_NUMBER = 40; // raqamlarning maxsimal qiymati
const MIN_NUMBER = -40; // raqamlarning minimal qiymati
const ANSWER_INTERVAL = 30; // javobning oraligi
const OPERATIONS = "*+-";

// Logic functions
function randomNumber(max = MAX_NUMBER, min = MIN_NUMBER) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function randomOperation() {
	const ranIdx = Math.floor(Math.random() * OPERATIONS.length);
	return OPERATIONS[ranIdx];
}

function calc(num1, num2, operation) {
	let question = `${num1} ${operation} ${num2}`;
	return eval(question);
}

function generateIncorrectNumber(correctNumber) {
	return randomNumber(correctNumber + ANSWER_INTERVAL, correctNumber - ANSWER_INTERVAL);
}

/**
 *
 * @param {number} correctAnswer
 * @returns {Array<number>} // [1,2,3,4]
 */
function getAnswers(correctAnswer) {
	const answers = [correctAnswer];

	for (let idx = 0; idx < 3; idx++) {
		answers.push(generateIncorrectNumber(correctAnswer));
	}

	return answers.sort(() => Math.random() - 0.5);
}

function checkAnswer(correctAnswer, selectedAnswer) {
	if (correctAnswer === selectedAnswer) return console.log("CORRECT");
	return console.log("INCORRECT");
}

// Render functions
function init() {
	const num1 = randomNumber();
	const num2 = randomNumber();
	const operate = randomOperation();

	number1.innerText = num1;
	number2.innerText = num2;
	operation.innerText = operate;

	const correctNumber = calc(num1, num2, operate);
	const answers = getAnswers(correctNumber);

	answersContent.innerHTML = `
	   <div class="row">
											<div class="answer_box" onclick="checkAnswer(${correctNumber},${answers[0]})">
												<div class="answer_btn">A</div>
												<span class="answer_text">${answers[0]}</span>
											</div>
											<div class="answer_box" onclick="checkAnswer(${correctNumber},${answers[1]})">
												<div class="answer_btn">B</div>
												<span class="answer_text">${answers[1]}</span>
											</div>
				</div>

			<div class="row">
			      <div class="answer_box" onclick="checkAnswer(${correctNumber},${answers[2]})">
												<div class="answer_btn">C</div>
												<span class="answer_text">${answers[2]}</span>
											</div>

									<div class="answer_box" onclick="checkAnswer(${correctNumber},${answers[3]})">
												<div class="answer_btn">D</div>
												<span class="answer_text">${answers[3]}</span>
											</div>

   </div>`;
}

init();
