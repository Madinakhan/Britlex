// class Course {
// 	constructor(course, teacher) {
// 		this.course = course;
// 		this.teacher = teacher;
// 	}

// 	ask(question) {
// 		console.log(`${this.course.toUpperCase()}: ${this.teacher} ${question}`);
// 	}
// }

// const reactJS = new Course("React JS", "Kent");
// reactJS.ask("In which situation would you use refs in React?");
// console.log(reactJS);

class Car {
	constructor(name, createdDate, color, price, brand) {
		this.name = `${brand} ${name}`;
		this.createdDate = createdDate;
		this.color = color;
		this.price = price;
	}

	run() { 
		console.log(`${this.name} is running... 🚙`);
	}
}

/* type = "ELECTRO" | "MECHANIC" | "HYBRID" */
class BMW extends Car {
	constructor(name, createdDate, color, price, brand, type) {
		super(name, createdDate, color, price, brand);
		this.brand = brand;
		this.type = type;
	}

	drift() {
		console.log(`${this.name} is drifting...💨`);
	}
}

class Tesla extends Car {
	constructor(name, createdDate, color, price, brand, type) {
		super(name, createdDate, color, price, brand);
		this.brand = brand;
		this.type = type;
	}

	autoDrive() {
		console.log(`${this.name} is driving automatically...`);
	}
}

const car1 = new BMW("i8", "20.04.22", "Black", 70000, "BMW", "HYBRID");
console.log(car1);

const car2 = new Tesla("Model S", "20.10.15", "White", 100000, "Tesla", "ELECTRO");

console.log(car2);
