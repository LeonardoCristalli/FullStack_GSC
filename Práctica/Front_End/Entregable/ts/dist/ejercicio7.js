"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
class Geometric_Figure {
    constructor(perimeter, area) {
        this.perimeter = perimeter;
        this.area = area;
    }
    get_perimeter() {
        return `El Perímetro del ${this.constructor.name} es: ${this.perimeter}`;
    }
    ;
    get_area() {
        return `El Área del ${this.constructor.name} es: ${this.area}`;
    }
    ;
}
class Square extends Geometric_Figure {
    constructor(side) {
        super(side * 4, side * side);
        this.side = side;
    }
}
class Circle extends Geometric_Figure {
    constructor(radius) {
        super(2 * Math.PI * radius, Math.PI * radius * radius);
        this.radius = radius;
    }
}
const side_square = readlineSync.questionFloat('Ingrese el lado del cuadrado: ');
const square = new Square(side_square);
const radius_circle = readlineSync.questionFloat('Ingrese el radio del circulo: ');
const circle = new Circle(radius_circle);
console.log(square.get_perimeter());
console.log(square.get_area());
console.log(circle.get_perimeter());
console.log(circle.get_area());
