let campo1 = document.getElementById("numero1");
let campo2 = document.getElementById("numero2");

let resultado = document.getElementById("resultado");

let suma = document.getElementById("mas");
let rest = document.getElementById("menos");
let mult = document.getElementById("por");
let divi = document.getElementById("entre");
let ce = document.getElementById("ce");

  let num1 = 0;
  let num2 = 0;
suma.addEventListener("click", function(click){
  num1 = parseFloat(campo1.value);
  num2 = parseFloat(campo2.value);
  resultado.value=num1+num2;
});

rest.addEventListener("click", function(click){
  num1 = parseFloat(campo1.value);
  num2 = parseFloat(campo2.value);
  resultado.value=num1-num2;
});

mult.addEventListener("click", function(click){
  num1 = parseFloat(campo1.value);
  num2 = parseFloat(campo2.value);
  resultado.value=num1*num2;
});

divi.addEventListener("click", function(click){
  num1 = parseFloat(campo1.value);
  num2 = parseFloat(campo2.value);
  resultado.value=num1/num2;
});

ce.addEventListener("click", function(click){
  campo1.value="";
  campo2.value="";
  resultado.value="";
});