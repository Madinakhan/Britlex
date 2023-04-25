"use strict";

/* 20.04.23(88) */

/* Prototype */
// function Box(name, color) {
// 	this.name = name;
// 	this.color = color;
// }

// Box.prototype.run = () => {
// 	console.log(`${this.name} is running...`);
// };

// for (let i = 1; i <= 10; i++) {
// 	const box = new Box(`Box-${i}`, `Black-${i}`);
// 	console.log(box);
// }

/* __proto__ */
// function Box(name, color) {
// 	this.name = name;
// 	this.color = color;
// } // new Function

// const str = "ars"; // new String
// const person = {}; // new Object
// Box.prototype.run = () => {
// 	console.log(`${this.name} is running...`);
// };

// const box = new Box("Black Box", "Black");
// console.log(box.__proto__ === Box.prototype);

// console.log(box.__proto__.__proto__ === Object.prototype);
// console.log(Box.__proto__ === Function.prototype);
// console.log(String.__proto__ === Function.prototype);
// console.log(Boolean.__proto__ === Function.prototype);
// console.log(Function.__proto__ === Function.prototype);
// console.log(Object.__proto__ === Function.prototype);

// function Box(name, color) {
// 	this.name = name;
// 	this.color = color;
// }

// Box.prototype.run = () => {
// 	console.log(`${this.name} is running...`);
// };

// const box = new Box("Black Box", "Black");

// Object.prototype.__proto__ === Object.__proto__;

// console.log(Object.prototype.__proto__);

const methods = {
	run() {
		console.log(`${this.name} is running`);
	},
	play() {},
	pause() {},
	refresh() {},
};

// function createCourse(courseName) {
// 	const course = Object.create(methods);
// 	course.name = courseName;

// 	return course;
// }

// function Course(courseName) {
// 	this.name = courseName;
// }
// Course.prototype.run = function () {
// 	console.log(`${this.name} is running`);
// };
// Course.prototype.play = function () {
// 	console.log(`${this.name} is playing...`);
// };

// const courseJS = new Course("Javascript");
// console.log(courseJS);
// const courseReact = new Course("React JS");
// console.log(courseReact);

/** instanceof */

// const str1 = "hello world"; // string
// const str2 = new String("hello world"); // object

// console.log(str1 instanceof String);
// console.log(str2 instanceof String);
// console.log(str2.__proto__ === String.prototype);

// function Box(name) {
// 	this.name = name;
// }

// Box.prototype.run = function () {};

// const box = new Box("Black box");
// console.log(box);

// console.log(box instanceof Box);
// console.log(box instanceof Object);

// const str = new String("hello world");

// console.log(str instanceof String);
// console.log(str instanceof Object);
// console.log(str.__proto__ === String.prototype);
// console.log(str.__proto__.__proto__ === Object.prototype);
// console.log(str);

// const list = [];
// console.log(list instanceof Array);
// console.log(list instanceof Object);

// const Method = {
// 	run: function () {
// 		console.log("running");
// 	},
// };

// const person = Object.create(Method);
// console.log(person.__proto__ === Method);

function Course(course, teacher) {
	this.course = course;
	this.teacher = teacher;
}

Course.prototype.ask = function (question) {
	console.log(`${this.course.toUpperCase()}: ${this.teacher} ${question}`);
};

const reactJS = new Course("React JS", "Kent");
console.log(reactJS);
const angularJS = new Course("Angular JS", "Mark");

reactJS.ask("In which situation would you use refs in React?");
angularJS.ask("What is AngularJS?");
