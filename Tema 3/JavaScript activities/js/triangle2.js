    
    for (let index = 5; index > 0; index--) {
        for(let f = 0 ; f < index ; f++){
            document.write("*");
        }     
        document.write("<br>");
    }

document.write("<br>");

for (let index = 0; index <= 5; index++) {

    for(let g = index ; g <= 5 ; g++){
        document.write("&nbsp");
    }

    for(let f = 0 ; f < index ; f++){
        document.write("* &nbsp");

    }
    document.write("<br>");

}

document.write("<br>");

for (let index = 5; index >= 0; index--) {

    for(let g = index ; g <= 5 ; g++){
        document.write("&nbsp");
    }


    for(let f = 0 ; f < index  ; f++){
        document.write("* &nbsp");
    }

    document.write("<br>");

}