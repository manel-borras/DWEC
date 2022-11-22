// function Punto(coordX, coordY){
//   this.x=coordX;
//   this.y=coordY;
//   this.mostrarCoordenadas=()=>`(${this.x},${this.y})`;
// }

// let a = new Punto(3,4);
// console.log(a.mostrarCoordenadas());
// let b = new Punto(-2,-10);
// console.log(b.mostrarCoordenadas());
// console.log(typeof Punto);
// console.log(a instanceof Punto);
// console.log(b.constructor.name);

class Animal{
  nombre;

  constructor(nombre = "AnimalNombrePrueba"){
    this.nombre = nombre;
  }

  saludar(){
    console.log(`Hola mi nombre es: ${this.nombre}`);
  }

}


class Gato extends Animal{
  edad;

  constructor(edad, nombre="porDefecto"){
    super(nombre);
    this.edad = edad;
  }

  saludar(){
    super.saludar()
    console.log(` y mi edad es de: ${this.edad}`);
  }

}

const prueba = new Animal();
prueba.saludar();
const Yuki = new Gato(2);
Yuki.saludar();