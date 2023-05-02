var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(fullName, birthDate, address) {
        this.fullName = fullName;
        this.birthDate = birthDate;
        this.address = address;
    }
    Person.prototype.eat = function (food) {
        console.log("".concat(this.fullName, " is eating ").concat(food));
    };
    return Person;
}());
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(fullName, birthDate, address, uniform) {
        var _this = _super.call(this, fullName, birthDate, address) || this;
        _this.uniform = uniform;
        return _this;
    }
    Doctor.prototype.cure = function (gender) {
        console.log("".concat(this.fullName, " is curing ").concat(gender, " person"));
    };
    return Doctor;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(fullName, birthDate, address, workPlace) {
        var _this = _super.call(this, fullName, birthDate, address) || this;
        _this.workPlace = workPlace;
        return _this;
    }
    Teacher.prototype.teach = function () {
    };
    return Teacher;
}(Person));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Student;
}(Person));
var doctor = new Doctor("MR Kent", "19.05.1968", "Tashkent city");
console.log("doctor = ", doctor);
var teacher = new Teacher("MR Mark", "31.03.2000", "Olmazor city");
console.log("teacher = ", teacher);
var student = new Student("MR Shukurullox", "13.07.2005", "Markhamat city");
console.log("student = ", student);
