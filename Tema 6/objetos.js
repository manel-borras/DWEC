function Punto(coordX, coordY){
  this.x=coordX;
  this.y=coordY;
  this.mostrarCoordenadas=()=>`(${this.x},${this.y})`;
}

let a = new Punto(3,4);
console.log(a.mostrarCoordenadas());
let b = new Punto(-2,-10);
console.log(b.mostrarCoordenadas());
console.log(typeof Punto);
console.log(a instanceof Punto);
console.log(b.constructor.name);