"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var max_planet = 100;
var Planet = /** @class */ (function () {
    function Planet(name, color, composition, radius, mass, rotationspeed) {
        if (name === void 0) { name = ""; }
        if (color === void 0) { color = ""; }
        if (composition === void 0) { composition = ""; }
        if (radius === void 0) { radius = 0; }
        if (mass === void 0) { mass = 0; }
        if (rotationspeed === void 0) { rotationspeed = 0; }
        this.name = name;
        this.color = color;
        this.composition = composition;
        this.radius = radius;
        this.mass = mass;
        this.rotationspeed = rotationspeed;
    }
    Planet.prototype.display_planetinfo = function () {
        console.log("Name: " + this.name);
        console.log("Color: " + this.color);
        console.log("Composition: " + this.composition);
        console.log("Radius: " + this.radius + " km");
        console.log("Mass: " + this.mass + " kg");
        console.log("Rotation speed: " + this.rotationspeed + " degrees per second\n");
    };
    Planet.prototype.set_details = function (name, color, composition, radius, mass, rotationSpeed) {
        this.name = name;
        this.color = color;
        this.composition = composition;
        this.radius = radius;
        this.mass = mass;
        this.rotationspeed = rotationSpeed;
    };
    return Planet;
}());
var GasGiant = /** @class */ (function (_super) {
    __extends(GasGiant, _super);
    function GasGiant(name, color, radius, mass, rotationSpeed, gas_type) {
        if (name === void 0) { name = ""; }
        if (color === void 0) { color = ""; }
        if (radius === void 0) { radius = 0; }
        if (mass === void 0) { mass = 0; }
        if (rotationSpeed === void 0) { rotationSpeed = 0; }
        if (gas_type === void 0) { gas_type = ""; }
        var _this = _super.call(this, name, color, "Gas", radius, mass, rotationSpeed) || this;
        _this.gas_type = gas_type;
        return _this;
    }
    GasGiant.prototype.display_info = function () {
        _super.prototype.display_planetinfo.call(this); // Call the parent class method to display basic planet info
        console.log("Gas Type: " + this.gas_type);
    };
    return GasGiant;
}(Planet));
var solar_system = /** @class */ (function () {
    function solar_system() {
        this.planets = [];
        this.planet_count = 0;
    }
    solar_system.prototype.add_planet = function (new_planet) {
        if (this.planet_count < max_planet) {
            this.planets.push(new_planet);
            this.planet_count++;
            console.log("Planet added successfully!");
        }
        else {
            console.log("Solar system is full! Cannot add more planets.");
        }
    };
    solar_system.prototype.view_planets = function () {
        if (this.planet_count === 0) {
            console.log("Solar System has no planets!");
            return;
        }
        console.log("Planets in the Solar System:");
        for (var _i = 0, _a = this.planets; _i < _a.length; _i++) {
            var planet = _a[_i];
            if (planet instanceof GasGiant) {
                planet.display_info();
            }
            else {
                planet.display_planetinfo(); // Correct call on the instance
            }
        }
    };
    return solar_system;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askQuestion(query) {
    return new Promise(function (resolve) { return rl.question(query, resolve); });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var solarSystem, pick, _a, _b, name_1, color, composition, radius, _c, mass, _d, rotationspeed, _e, new_planet, name_2, color, radius, _f, mass, _g, rotationspeed, _h, gas_type, new_gas_giant;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    solarSystem = new solar_system();
                    _j.label = 1;
                case 1:
                    console.log("Solar System Management");
                    console.log("1. Add a new planet");
                    console.log("2. Add a new Gas Giant");
                    console.log("3. View existing planets");
                    console.log("4. Exit");
                    _a = parseInt;
                    return [4 /*yield*/, askQuestion("Welcome! Enter your choice: ")];
                case 2:
                    pick = _a.apply(void 0, [(_j.sent()) || "4"]);
                    _b = pick;
                    switch (_b) {
                        case 1: return [3 /*break*/, 3];
                        case 2: return [3 /*break*/, 10];
                        case 3: return [3 /*break*/, 17];
                        case 4: return [3 /*break*/, 18];
                    }
                    return [3 /*break*/, 19];
                case 3: return [4 /*yield*/, askQuestion("Enter name of new planet: ")];
                case 4:
                    name_1 = (_j.sent()) || "";
                    return [4 /*yield*/, askQuestion("Enter color of new planet: ")];
                case 5:
                    color = (_j.sent()) || "";
                    return [4 /*yield*/, askQuestion("Enter composition of new planet: ")];
                case 6:
                    composition = (_j.sent()) || "";
                    _c = parseFloat;
                    return [4 /*yield*/, askQuestion("Enter radius of new planet: ")];
                case 7:
                    radius = _c.apply(void 0, [(_j.sent()) || "0"]);
                    _d = parseFloat;
                    return [4 /*yield*/, askQuestion("Enter mass for new planet: ")];
                case 8:
                    mass = _d.apply(void 0, [(_j.sent()) || "0"]);
                    _e = parseFloat;
                    return [4 /*yield*/, askQuestion("Enter rotation speed of new planet: ")];
                case 9:
                    rotationspeed = _e.apply(void 0, [(_j.sent()) || "0"]);
                    new_planet = new Planet(name_1, color, composition, radius, mass, rotationspeed);
                    solarSystem.add_planet(new_planet);
                    return [3 /*break*/, 20];
                case 10: return [4 /*yield*/, askQuestion("Enter name of new Gas Giant: ")];
                case 11:
                    name_2 = (_j.sent()) || "";
                    return [4 /*yield*/, askQuestion("Enter color of new Gas Giant: ")];
                case 12:
                    color = (_j.sent()) || "";
                    _f = parseFloat;
                    return [4 /*yield*/, askQuestion("Enter radius of new Gas Giant: ")];
                case 13:
                    radius = _f.apply(void 0, [(_j.sent()) || "0"]);
                    _g = parseFloat;
                    return [4 /*yield*/, askQuestion("Enter mass for new Gas Giant: ")];
                case 14:
                    mass = _g.apply(void 0, [(_j.sent()) || "0"]);
                    _h = parseFloat;
                    return [4 /*yield*/, askQuestion("Enter rotation speed of new Gas Giant: ")];
                case 15:
                    rotationspeed = _h.apply(void 0, [(_j.sent()) || "0"]);
                    return [4 /*yield*/, askQuestion("Enter type of gas (e.g., Hydrogen, Helium): ")];
                case 16:
                    gas_type = (_j.sent()) || "";
                    new_gas_giant = new GasGiant(name_2, color, radius, mass, rotationspeed, gas_type);
                    solarSystem.add_planet(new_gas_giant);
                    return [3 /*break*/, 20];
                case 17:
                    solarSystem.view_planets();
                    return [3 /*break*/, 20];
                case 18:
                    console.log("Exiting Program...");
                    return [3 /*break*/, 20];
                case 19:
                    console.log("Invalid choice. Please try again.");
                    _j.label = 20;
                case 20:
                    if (pick !== 4) return [3 /*break*/, 1];
                    _j.label = 21;
                case 21: return [2 /*return*/];
            }
        });
    });
}
main();
