let lista = new Array;
let bool = true;



do {
  var palabra = prompt("Dime una palabra para saber si son anagramas: ");  
  if (palabra != '' && palabra != null) {
    lista.push(palabra)    
  }
} while (palabra != '' && palabra != null);

for (let key = 0; key < lista.length; key++) {

  palabraBase = lista[0].toLowerCase().split('').sort().join('');
  
  if (palabraBase === lista[key].toLowerCase().split('').sort().join('')) {
    console.log(lista[key].toLowerCase().split('').sort().join(''));
  } else{
    document.write("<h1>Las palabras o palabra no es un anagrama</h1>");
    console.log(lista[key].toLowerCase().split('').sort().join(''));
    bool = false;
    break;
  }

  if (bool === true) {
    return "Las palabras son anagramas";
  } else{
    return "Las palabras no son anagramas";
  }
}
