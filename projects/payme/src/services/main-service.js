"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainService = void 0;
var card_repository_1 = require("../repository/card-repository");
var user_repository_1 = require("../repository/user-repository");
var MainService = /** @class */ (function () {
    function MainService() {
        this.cartRepository = new card_repository_1.CardRepository();
        this.userRepository = new user_repository_1.UserRepository();
    }
    MainService.prototype.register = function () {
        var _a;
        var users = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            users[_i] = arguments[_i];
        }
        (_a = this.userRepository).create.apply(_a, users);
    };
    MainService.prototype.login = function (phoneNumber, password) {
        var currentUser = this.userRepository.getByPhoneNumber(phoneNumber);
        if (currentUser.password !== password)
            throw new Error("Passwords don't match");
        return currentUser;
    };
    MainService.prototype.registerCard = function () {
        var _a;
        var cards = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            cards[_i] = arguments[_i];
        }
        (_a = this.cartRepository).create.apply(_a, cards);
    };
    return MainService;
}());
exports.MainService = MainService;
