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
var Parent = /** @class */ (function () {
    function Parent(parentName, childName) {
        this.parentName = parentName;
        this.childName = childName;
    }
    Parent.prototype.run = function () {
        console.log("".concat(this.childName, " is running..."));
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(parentName, childName, description) {
        var _this = _super.call(this, parentName, childName) || this;
        _this.description = description;
        return _this;
    }
    Child.prototype.jump = function () {
        console.log("".concat(this.parentName, " is jumping..."));
    };
    return Child;
}(Parent));
var child = new Child("Kent", "Maya", "For Testing");
console.log(child);
console.log(child.hasOwnProperty("parentName"));
console.log(child.hasOwnProperty("childName"));
console.log(child.hasOwnProperty("jump"));
console.log(child.hasOwnProperty("run"));
