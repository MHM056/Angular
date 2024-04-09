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
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Watermelon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Watermelon.prototype.toString = function () {
        console.log("Element: Water");
        console.log("Sort: " + this.melonSort);
        console.log("Element Index: " + this.elementIndex);
    };
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Firemelon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Firemelon.prototype.toString = function () {
        console.log("Element: Fire");
        console.log("Sort: ".concat(this.melonSort));
        console.log("Element Index: ".concat(this.elementIndex));
    };
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Earthmelon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Earthmelon.prototype.toString = function () {
        console.log("Element: Earth");
        console.log("Sort: ".concat(this.melonSort));
        console.log("Element Index: ".concat(this.elementIndex));
    };
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Airmelon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Airmelon.prototype.toString = function () {
        console.log("Element: Air");
        console.log("Sort: ".concat(this.melonSort));
        console.log("Element Index: ".concat(this.elementIndex));
    };
    return Airmelon;
}(Melon));
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elementType = ["Water", "Fire", "Earth", "Air"];
        return _this;
    }
    Object.defineProperty(Melolemonmelon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Melolemonmelon.prototype.morph = function () {
        var element = this.elementType.shift();
        this.currentElement = element;
        this.elementType.push(element);
    };
    Melolemonmelon.prototype.toString = function () {
        console.log("Element: " + this.currentElement);
        console.log("Sort: ".concat(this.melonSort));
        console.log("Element Index: ".concat(this.elementIndex));
    };
    return Melolemonmelon;
}(Melon));
var melolemon = new Melolemonmelon(12, "New");
melolemon.morph();
console.log(melolemon.currentElement);
melolemon.morph();
console.log(melolemon.currentElement);
melolemon.morph();
console.log(melolemon.currentElement);
melolemon.morph();
console.log(melolemon.currentElement);
melolemon.morph();
console.log(melolemon.currentElement);
melolemon.morph();
console.log(melolemon.currentElement);
