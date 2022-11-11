//Si utilizamos la función flecha no nos funcionará el this, deberemos usar un function .media=function(){..}
Array.prototype.media=(n)=>{
  let sum = 0;
  for (let i = 0; i<n.length; i++){
    sum += n[i];
  }
let avg = sum/n.length;
return avg;
};

lista = [1,2,3,4,5,6,7,8,9,10];
console.log(lista.media(lista));