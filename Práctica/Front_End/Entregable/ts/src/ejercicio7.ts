import * as readlineSync from 'readline-sync';

class Geometric_Figure {
  constructor(protected perimeter: number, protected area: number) {}

  get_perimeter() {
    return `El Perímetro del ${this.constructor.name} es: ${this.perimeter}`
  };

  get_area() {
    return `El Área del ${this.constructor.name} es: ${this.area}`
  };
}

class Square extends Geometric_Figure {
  constructor(private side: number) {
    super(side * 4, side * side);
  }
}

class Circle extends Geometric_Figure {
  constructor(private radius: number) {
    super(2 * Math.PI * radius, Math.PI * radius * radius);
  }
}

const side_square = readlineSync.questionFloat('Ingrese el lado del cuadrado: ');
const square: Geometric_Figure = new Square(side_square);

const radius_circle = readlineSync.questionFloat('Ingrese el radio del circulo: ');
const circle: Geometric_Figure = new Circle(radius_circle);

console.log(square.get_perimeter());
console.log(square.get_area());

console.log(circle.get_perimeter());
console.log(circle.get_area());