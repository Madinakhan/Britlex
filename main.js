// // // // "use strict";

// // // // const person = {
// // // // 	name: "Kent",
// // // // 	age: 20,
// // // // 	run() {
// // // // 		const jump = () => {
// // // // 			console.log(`${this.name} is jumping...`);
// // // // 		};

// // // // 		jump();
// // // // 	},
// // // // };

// class Person {
// 	constructor(name, age, address) {
// 		this.name = name;
// 		this.age = age;
// 		this.address = address;
// 	}
// 	run() {
// 		console.log(`PERSON: ${this.name} is running...`);
// 	}
// }

// class Doctor extends Person {
// 	constructor(name, age, address, uniform) {
// 		super(name, age, address);
// 	}
// 	run() {
// 		console.log(`DOCTOR: ${this.name} is running...`);
// 	}
// }

// const user = new Doctor("Kent", 20, "Tashkent", "Green");
// user.run(); //
// user.hasOwnProperty("name"); //

// // console.log(a);
// // var a = 30;

// class Boy {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	run() {
// 		console.log(`${this.name} is running...`);
// 	}
// }

// const boys = [];

// for (let i = 0; i < 10; i++) {
// 	const boy = new Boy(`Kent-${i + 1}`);
// 	boys.push({ ...boy });
// }

// for (let boy of boys) {
// 	boy.run();
// }
// "use strict";

// const person = {
// 	name: "arslonbek",
// 	run() {
// 		const jump = () => {
// 			console.log(`${this.name} is jumping...`);
// 		};

// 		jump();
// 	},
// };

class Person {}

const person = new Person();

// person.prototype === Object.prototype
