type Food = "Lavash" | "Donar" | "Pizza" | "Sandwich";
type Uniform = "White" | "Blue" | "Green";
type Gender = "Male" | "Female";
type Place = "University" | "School" | "Collage" | "Lyceum";

class Person {
	constructor(public fullName: string, public birthDate: string, public address: string) {}

	eat(food: Food) {
		console.log(`${this.fullName} is eating ${food}`);
	}
}

class Doctor extends Person {
	constructor(fullName: string, birthDate: string, address: string, public uniform: Uniform) {
		super(fullName, birthDate, address);
	}

	cure(gender: Gender) {
		console.log(`${this.fullName} is curing ${gender} person`);
	}
}

class Teacher extends Person {
	constructor(fullName: string, birthDate: string, address: string, public workPlace: Place) {
		super(fullName, birthDate, address);
	}

	teach() {
		
	}
}
class Student extends Person {}

const doctor = new Doctor("MR Kent", "19.05.1968", "Tashkent city");
console.log("doctor = ", doctor);

const teacher = new Teacher("MR Mark", "31.03.2000", "Olmazor city");
console.log("teacher = ", teacher);

const student = new Student("MR Shukurullox", "13.07.2005", "Markhamat city");
console.log("student = ", student);
