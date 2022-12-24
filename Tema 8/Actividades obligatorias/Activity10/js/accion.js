let campo1 = document.getElementById("numero1");
let campo2 = document.getElementById("numero2");

let resultado = document.getElementById("resultado");

let suma = document.getElementById("mas");
let rest = document.getElementById("menos");
let mult = document.getElementById("por");
let divi = document.getElementById("entre");
let ce = document.getElementById("ce");

//Get the elements in the html

suma.addEventListener("click", ()=>{
  num1 = parseFloat(campo1.value);
  num2 = parseFloat(campo2.value);
  resultado.value=num1+num2;
});

rest.addEventListener("click",()=>{
  num1 = parseFloat(campo1.value);
  num2 = parseFloat(campo2.value);
  resultado.value=num1-num2;
});

mult.addEventListener("click", ()=>{
  num1 = parseFloat(campo1.value);
  num2 = parseFloat(campo2.value);
  resultado.value=num1*num2;
});

divi.addEventListener("click", ()=>{
  num1 = parseFloat(campo1.value);
  num2 = parseFloat(campo2.value);
  resultado.value=num1/num2;
});

ce.addEventListener("click", ()=>{
  campo1.value="";
  campo2.value="";
  resultado.value="";
});

//Tell the application what to do when the user clicks a button, it's the same to all the buttons, only changes the math symbol

//It could be done in less lines of code if we parse the numbers inside the resultado.value, but it didn't seem easy to read