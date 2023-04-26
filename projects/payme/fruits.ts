import { BRAND, Fruit } from "./fruit";

export class Fruits {
	private list: Fruit[] = [];
	private counter = 0;

	add(fruit: Fruit) {
		if (this.isExist(fruit.brand)) throw new Error(`Fruit(${fruit.name}, ${fruit.brand}) already exists`);
		fruit.setId(++this.counter);
		this.list.push(fruit);
	}

 addWithList() {}

	isExist(brand: BRAND) {
		for (let fruit of this.list) {
			if (fruit.brand === brand) return true;
		}

		return false;
	}

	getList(): Fruit[] {
		return this.list;
	}
}
