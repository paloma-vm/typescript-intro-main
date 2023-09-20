"use strict";
// Giant Robot class
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
Object.defineProperty(exports, "__esModule", { value: true });
var example_8_1 = require("./example-8");
var Robot = /** @class */ (function (_super) {
    __extends(Robot, _super);
    function Robot(name, power, type) {
        var _this = _super.call(this, name, power, type) || this;
        _this.name = name;
        _this.power = power;
        _this.type = type;
        return _this;
    }
    Robot.prototype.describe = function () {
        console.log("name: ".concat(this.name, " type: ").concat(this.type, " power: ").concat(this.power));
    };
    return Robot;
}(example_8_1.Kaiju));
var newRobot = new Robot('Robot', 100, example_8_1.KaijuType.ape);
newRobot.describe();
