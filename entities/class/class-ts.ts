class Car {
	name: string;
	createdDate: string;
	color: string;
	price: number;
	constructor(name: string, createdDate: string, color: string, price: number, brand: string) {
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
type Type = "ELECTRO" | "MECHANIC" | "HYBRID";
class BMW extends Car {
	brand: string;
	type: Type;
	constructor(name: string, createdDate: string, color: string, price: number, brand: string, type: Type) {
		super(name, createdDate, color, price, brand);
		this.brand = brand;
		this.type = type;
	}

	drift() {
		console.log(`${this.name} is drifting...💨`);
	}
}

class Tesla extends Car {
	brand: string;
	type: Type;

	constructor(name: string, createdDate: string, color: string, price: number, brand: string, type: Type) {
		super(name, createdDate, color, price, brand);
		this.brand = brand;
		this.type = type;
	}

	autoDrive() {
		console.log(`${this.name} is driving automatically...`);
	}
}

const car1 = new BMW("i8", "20.03.13", "Black", 200000, "BMW", "HYBRID");
console.log(car1);

const car2 = new Tesla("Model S", "20.03.15", "Red", 90000, "Tesla", "ELECTRO");
console.log(car2);
