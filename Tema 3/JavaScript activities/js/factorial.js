numero = 5;

if (numero > 0){
    for (let index = 5; index > 0; index--) {

        for(let f = 0 ; f < index ; f++){
            document.write("*");
        }
        document.write("<br>");
    }

    document.write("<br><br><hr>");

    for (let index = 0; index <= 5; index++) {

        for(let f = 0 ; f < index ; f++){
            
            for (let r = 5; r >= 0; r--){
                document.write("&nbsp");
            }

            document.write("*");
        
        }
        document.write("<br>");
    }



}else if (numero <= 0) {

} else if (isNaN){

}



