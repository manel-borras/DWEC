let canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let url = "https://i.pinimg.com/736x/8c/cc/54/8ccc54996392e6c8f1038af2788162a2.jpg";


const img = new Image();
context.beginPath();
img.src = url;
img.addEventListener("load", (ev) => {
  context.lineWidth = 2;
  context.strokeStyle = "black";
  //cuadrado contenedor
  context.strokeRect(0, 0, width, height);
  //dibujo de la imagen
  context.drawImage(img, 200, 150);
})