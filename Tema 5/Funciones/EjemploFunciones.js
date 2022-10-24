//Inicializamos la funcion
function numPares(array) {
//Inicializamos al variable contador que almacena la cantidad de numeros pares que nos salen.
    var cont = 0;    
//Hacemos un bucle for que se repita lo largo que es el array
    for (let index = 0; index < array.length; index++) {
//Con el if comprobamos que al dividir el numero del array entre 2 nos de 0 y sumamos 1 al contador
        if (array[index] % 2 === 0) {
            cont +=1;
        }
    }
//Imprimimos la variable cont por consola
    console.log(cont);
}
//Definimos la array y llamamos a la función
lista = [1, 14, 22, 15, 14, 18, 1324648];
console.log(numPares(lista));