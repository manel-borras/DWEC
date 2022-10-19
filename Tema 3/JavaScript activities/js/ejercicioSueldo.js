/*
CALCULAR EL SALARIO

-Si el salario es mayor de 2000€ no se hace nada

-Si el salario esta entre 1000 y 2000{
        Si la edad es mayor de 45 años le subimos un 3% al salario
        Si es menor o igual que 45 le subimos un 10%
    }

-Si el salario es menor que 1000€{
        El salario para la gente de menos de 30 años será 1100
        Si está entre 30 y 45 años le subimos un 3%
        Para los que tengan mas de 45 les subimos un 15%
    }
 */



if (salario > 2000) {

} else if(salario >= 1000 && salario <= 2000){
    if (edad > 45) {
        console.log
        salario += salario*3/100;
        
    } if (edad <= 45){
        salario += salario*10/100;
    }

} else if(salario <1000){
    if(edad < 30){
        salario = 1100;
    } if (edad >= 30 && edad <=45){
        salario += salario*3/100;
    } else if (edad >45){
        salario += salario*15/100;
    }
}

console.log(salario);
alert("Tu salario es de: "+salario);

