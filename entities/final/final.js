// type Food = "Lavash" | "Donar" | "Pizza" | "Sandwich";
// type Uniform = "White" | "Blue" | "Green";
// type Gender = "Male" | "Female";
// type Place = "University" | "School" | "Collage" | "Lyceum";
// type Problem = "Food" | "Flat" | "Money" | "Examine";
// type Time = "07:00" | "13:00" | "18:00";
// class Person {
// 	constructor(public fullName: string, public birthDate: string, public address: string) {}
// 	eat(food: Food) {
// 		console.log(`PERSON: ${this.fullName} is eating ${food}`);
// 	}
// }
// class Doctor extends Person {
// 	constructor(fullName: string, birthDate: string, address: string, public uniform: Uniform, public time: Time) {
// 		super(fullName, birthDate, address);
// 	}
// 	cure(gender: Gender) {
// 		console.log(`${this.fullName} is curing ${gender} person`);
// 	}
// 	eat(food: Food) {
// 		console.log(`${this.time} : ${this.fullName} is eating ${food}`);
// 	}
// }
// const doctor = new Doctor("MR Kent", "19.05.1968", "Tashkent city", "Green", "13:00");
// console.log(doctor);
// console.log(doctor instanceof Doctor);
// console.log(Doctor.prototype instanceof Person);
// __proto__
var num = 20; // new Number(20).valueOf();
// @ts-ignore
console.log(num.__proto__ === Number.prototype);
// @ts-ignore
console.log("hello world".__proto__ === String.prototype);
var Box = /** @class */ (function () {
    function Box() {
    }
    return Box;
}());
var box = new Box();
// @ts-ignore
console.log(box.__proto__ === Box.prototype);
// @ts-ignore
console.log(box.__proto__.__proto__ === Object.prototype);
