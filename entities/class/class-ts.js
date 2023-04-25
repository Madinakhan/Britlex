var __extends =
	(this && this.__extends) ||
	(function () {
		var extendStatics = function (d, b) {
			extendStatics =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function (d, b) {
						d.__proto__ = b;
					}) ||
				function (d, b) {
					for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
				};
			return extendStatics(d, b);
		};
		return function (d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
		};
	})();

var Car = (function () {
	function Car(name, createdDate, color, price, brand) {
		this.name = "".concat(brand, " ").concat(name);
		this.createdDate = createdDate;
		this.color = color;
		this.price = price;
	}
	Car.prototype.run = function () {
		console.log("".concat(this.name, " is running..."));
	};
	return Car;
})();

var BMW = (function (_super) {
	__extends(BMW, _super);
	function BMW(name, createdDate, color, price, brand, type) {
		var _this = _super.call(this, name, createdDate, color, price, brand) || this;
		_this.brand = brand;
		_this.type = type;
		return _this;
	}
	BMW.prototype.drift = function () {
		console.log("".concat(this.name, " is drifting..."));
	};
	return BMW;
})(Car);

var Tesla = /** @class */ (function (_super) {
	__extends(Tesla, _super);
	function Tesla(name, createdDate, color, price, brand, type) {
		var _this = _super.call(this, name, createdDate, color, price, brand) || this;
		_this.brand = brand;
		_this.type = type;
		return _this;
	}
	Tesla.prototype.autoDrive = function () {
		console.log("".concat(this.name, " is driving automatically..."));
	};
	return Tesla;
})(Car);
var car1 = new BMW("i8", "20.03.13", "Black", 200000, "BMW", "HYBRID");
console.log(car1);
var car2 = new Tesla("Model S", "20.03.15", "Red", 90000, "Tesla", "ELECTRO");
console.log(car2);
