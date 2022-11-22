//This function tells the user if a number is even or odd dividing it by 2 and checking if the remainder is 0.
function evenOdd(number) {
        return number%2===0?"even":"odd";
}
//For loop that makes a random number between 1 and 1000 and uses the function to write it.
    for (let index = 0; index <= 500; index++) {
        rand = parseInt(Math.random()*10000+1);
        document.write(index+"-) El numero "+rand+" es: "+evenOdd(rand)+"<br>");
    }