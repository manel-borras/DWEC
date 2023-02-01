let canvas = document.getElementById('progress');
var context = canvas.getContext('2d');
var i = 0;
var width = canvas.width = 250;
var height = canvas.height = 100;

let x = 0;

  function createProgression(){

    context.beginPath();
      context.fillStyle = 'gray';
      context.fillRect(x, 0, 5, 50);
    context.closePath();

    x += parseInt(width/10);

    context.beginPath();
      context.fillStyle = 'black';
      context.fillRect(x, 0, 5, 50);
    context.closePath();

    if (x >= 250) {
      x = 0;
    context.beginPath()
      context.fillStyle='black';
      context.fillRect(x, 0, 5, 50);
    context.closePath();
    }

  setTimeout(() => {
    requestAnimationFrame(createProgression)    
  }, 100);
}

console.log(progress);

createProgression();



/*PRUEBA 1*/
// if (i% === 0) {
//   context.beginPath;
//     context.fillStyle='black';
//     context.strokeStyle='black';
//     context.fillRect(x, 0, 5, 100);
//     context.stroke();
//     context.closePath();
//   context.beginPath;
//   x += 50;
// } else {
//   context.beginPath;
//     context.fillStyle='grey';
//     context.strokeStyle='grey';
//     context.fillRect(x, 0, 5, 100);
//     context.stroke();
//     context.closePath();
//   context.beginPath;
//   x += 50;
// }

/*PRUEBA 2*/
// context.clearRect(x+50, 0, 5, 100);
// context.beginPath()
//   context.fillStyle='black';
//   context.fillRect(x+50, 0, 5, 100);
// context.closePath();
// console.log(`La segunda x es: ${x}`)