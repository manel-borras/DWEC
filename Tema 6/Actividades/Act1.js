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

    this.addition=(p)=>new Punto(this.x+p.x , this.y+p.y);

    this.getDistance = that => {
      let a = Math.abs(this.x - that.x);
      let b = Math.abs(this.y - that.y);
      a*=a;
      b*=b;
      let ans = Math.sqrt(a+b);
      return ans;
    }

  this.mostrarCoordenadas=()=>`(${this.x},${this.y})`;
}

let a = new Punto(3,4);
console.log(a.__proto__);
Punto.prototype.copy=()=>{return new Punto(this.x, this.y)};
console.log(a.__proto__);
Punto.prototype.z=60;
console.log(a.__proto__);
let b = new Punto(5,7);
console.log(b.__proto__);
a.z=45;
Punto.prototype.z=100;
console.log(a.z);
console.log(b.z);
