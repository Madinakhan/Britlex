class Parent {
	constructor(public parentName: string, public childName: string) {}
	run() {
		console.log(`${this.childName} is running...`);
	}
}

class Child extends Parent {
	constructor(parentName: string, childName: string, public description: string) {
		super(parentName, childName);
	}

	jump() {
		console.log(`${this.parentName} is jumping...`);
	}
}

const child = new Child("Kent", "Maya", "For Testing");

console.log(child);
console.log(child.hasOwnProperty("parentName"));
console.log(child.hasOwnProperty("childName"));
console.log(child.hasOwnProperty("jump"));
console.log(child.hasOwnProperty("run"));
