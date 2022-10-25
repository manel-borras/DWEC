serie = parseInt(prompt("Dime que posición de la sucesión de fibonacci quieres saber: "));

const getFibonacciIndex = n => {
  if (n <= 1) {
    return n;
  }
   
  let a = 0, b = 1, c = 1, result = 1;
  
  while (c < n) {
    c = a + b;
    a = b;
    b = c;
    result++;
  }
  
  return result;
};

alert(getFibonacciIndex(8));