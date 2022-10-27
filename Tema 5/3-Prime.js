num = parseInt(prompt("Type the number you want to check: "));

function isPrime(n){
  cont = n;
  if(n === 0){
    document.write("<p>El numero es 0</p>");
  } else if(n === 1){
    document.write("<p>El numero es 1</p>");
  }else{
    console.log(n);
    do {
      
      if (n%2 == 0) {
        console.log(n);
        b = false;
      } else{
        b = true;
      }
      n = n-1;
    } while (n > cont/2);
  }

  if(b == true){
    document.write("<p>El numero es primo</p>");
  } else{
    document.write("<p>El numero no es primo</p>");
  }
}

isPrime(num);