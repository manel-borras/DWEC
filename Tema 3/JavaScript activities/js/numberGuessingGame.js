let rand = parseInt(Math.random()*(100 - 1 +1) + 1);
let numero;
console.log(rand);
bool = true;
let intentos = 1;
do{

    do{
  
        numero = prompt("Dime un numero: ");
        if (numero === null) {
            break;
        }
        numero = parseInt(numero);
        if(isNaN(numero)){
            alert("Introduce un tipo de valor numérico");
        }
        if (numero == rand) {
            alert("Felicidades has acertado el número");
            alert("La puntuación es de " + intentos);
        }else{
            if (numero > rand) {
                alert("El numero es mas bajo");
            } else if (numero < rand){
                alert("El numero es mas alto");
            }
        }

        console.log(numero);
        console.log(rand);
        intentos ++;
    }while (numero != rand);


if (confirm("continuar")) {
    bool = true
}else{
    bool = false;
}

}while (bool == true);
