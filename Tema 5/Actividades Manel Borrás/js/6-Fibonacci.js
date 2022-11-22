//We ask the user what fibonacci succesion does he want to know
serie = parseInt(prompt("Write what fibonacci succesion do you want to know: "));


function fibonacciIterative(n) {

    if (n <= 0) {
      return 0;
    } else if(n === 1){
      return 1;
    }
     
    let a = 0, b = 1, result = a+b;

    for (let i = 2; i < n; i++) {
      a = b;
      b = result;
      result = a+b;
    }
    
    return result;
  };

  function fibonacciRecursive(n) {
    if (n <= 0) {
      return 0;
    } else if(n === 1){
      return 1;
    }

    let a = 0;
    let b = 0;
    result = a+b;

  }

alert(fibonacciIterative(serie));