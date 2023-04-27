"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
var UserRepository = /** @class */ (function () {
    function UserRepository() {
        this.list = [];
        this.id = 0;
    }
    UserRepository.prototype.create = function () {
        var users = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            users[_i] = arguments[_i];
        }
        for (var _a = 0, users_1 = users; _a < users_1.length; _a++) {
            var user = users_1[_a];
            if (this.isExist(user.phoneNumber)) {
                throw new Error("User(".concat(user.phoneNumber, ") already exists"));
            }
            user.setId(++this.id);
            this.list.push(user);
        }
    };
    UserRepository.prototype.getList = function () {
        return this.list;
    };
    UserRepository.prototype.isExist = function (phoneNumber) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.phoneNumber === phoneNumber)
                return true;
        }
        return false;
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;
