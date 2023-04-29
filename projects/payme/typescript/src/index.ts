// import { Card } from "./entities/card";
// import { User } from "./entities/user";
// import { UserService } from "./services/user-service";

// function init() {
// 	try {
// 		const userService = new UserService();
// 		const user1 = new User("Kent", "Mark", "+998998961348", "root123", false);
// 		userService.create(user1);

// 		const user = userService.login(user1.phoneNumber, user1.password);
// 		console.log(user === user1);

// 		// const currentUser = mainService.login("+998998961348", "root123");
// 		// console.log("USER: ", currentUser);
// 		// user1.lastName = "Sharipov";
// 		// console.log("USER: ", currentUser);
// 	} catch (err: any) {
// 		console.error(`\n ❌: ${err.message}`);
// 	}
// }

// init();

class User {
	constructor(public fullName: string) {}
	run() {
		console.log(`${this.fullName} is running...`);
	}
}

function createUser(fullName: string) {
	return {
		fullName,
		run() {
			console.log(`${this.fullName} is running...`);
		},
	};
}

let user = createUser("Arslonbek Alimbaev");
user = { ...user };
user.run();
