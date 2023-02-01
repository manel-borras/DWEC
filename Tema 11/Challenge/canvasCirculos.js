var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
// obtenemos las dimensiones del canvas
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

function ball() {

  //Posiciones
  this.x = Math.random() * window.width;
  this.y = Math.random() * window.height;
  this.rand = Math.random() * 50;

  this.vx = Math.random() * 5;
  this.vy = Math.random() * 5;
  //Randomizar los colores
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  

  this.pintar = function () {
    context.beginPath();
    context.arc(this.x, this.y, this.rand, 0, Math.PI * 2, true)
    context.fillStyle = `rgb(${r}, ${g}, ${b})`;
    context.fill();
    context.closePath();

      if (this.x > canvas.width || this.x < this.rand) this.vx = -this.vx;
      if (this.y > canvas.height || this.y < this.rand) this.vy = -this.vy;
  
    }
}

let bolas = [];

for (let i = 0; i < 50; i++) {
  bolas.push(new ball());
}

function animar() {
  context.clearRect(0, 0, width, height);

  for (let bola of bolas) {
    bola.x -=bola.vx;
    bola.y -=bola.vy;
    bola.pintar();    
  }
  
  requestAnimationFrame(animar);
};


animar();


