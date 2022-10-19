
function evenOdd(number) {
        return number%2===0?"even":"odd";
}

    for (let index = 0; index <= 500; index++) {
        rand = parseInt(Math.random()*10000+1);
        document.write(index+"-) El numero "+rand+" es: "+evenOdd(rand)+"<br>");
    }