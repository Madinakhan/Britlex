// import { Card } from "./entities/card";
// import { User } from "./entities/user";
// import { UserService } from "./services/user-service";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var User = /** @class */ (function () {
    function User(fullName) {
        this.fullName = fullName;
    }
    User.prototype.run = function () {
        console.log("".concat(this.fullName, " is running..."));
    };
    return User;
}());
function createUser(fullName) {
    return {
        fullName: fullName,
        run: function () {
            console.log("".concat(this.fullName, " is running..."));
        },
    };
}
var user = createUser("Arslonbek Alimbaev");
user = __assign({}, user);
user.run();
