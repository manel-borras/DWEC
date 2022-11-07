function Punto(coordX, coordY){
  this.x=coordX;
  this.y=coordY;
  
  if (isNaN(coordX)) {
    this.x = 0;
  }else if (isNaN(coordY)) {
    this.y = 0;
  }
    this.change=(x2,y2)=>{
      this.x = x2;
      this.y = y2;
    };

    this.copy=()=>{
      return new Punto(this.x, this.y);
    }

    this.equals = (n) =>{
      return this.x==n.x && this.y==n.y;
    }

  this.mostrarCoordenadas=()=>`(${this.x},${this.y})`;
}

let a = new Punto(3,4);
let c = a.copy();
console.log(a.mostrarCoordenadas());
a.change(5,8);
console.log(a.mostrarCoordenadas());
let b = a.copy();
console.log(b.mostrarCoordenadas());
console.log(c.mostrarCoordenadas());



console.log(a.equals(b));
