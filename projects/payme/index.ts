import { Fruit } from "./fruit";
import { Fruits } from "./fruits";

const fruit1 = new Fruit("Banana", 26000, 1, "BANANZA");
const fruit2 = new Fruit("Apple", 30000, 3, "JESCO");
const fruit3 = new Fruit("Orange", 90000, 2, "DENA");
const fruit4 = new Fruit("Lemon", 40000, 1, "DENA");

const fruits = new Fruits();
try {
	fruits.addWithList(fruit1, fruit2, fruit3, fruit4);
	console.log(fruits.getList());
} catch (err: any) {
	console.error(err.message);
}
