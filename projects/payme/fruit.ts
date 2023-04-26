export type BRAND = "BANANZA" | "ORANGE" | "DENA" | "ELSE" | "JESCO";

export class Fruit {
	private id: number;
	constructor(public name: string, public price: number, public weight: number, public brand: BRAND) {}

	setId(id: number) {
		this.id = id;
	}

	getId() {
		return this.id;
	}
}
