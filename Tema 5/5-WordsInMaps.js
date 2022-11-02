var listWords = new Array();


function grupoPalabras(array) {

    let wordMap = new Map();

    for (let i in array) {

        if (wordMap.get(array[i])) {
            let cont = 1 + wordMap.get(array[i]);
            wordMap.set(array[i], cont);

        } else {
            wordMap.set(array[i], 1);
        }
    }

    return wordMap;

}

let word;

do {
    word = prompt("Tell me a word or leave it empty if you want to stop the program: ");
    if (word !== "") {
        listWords.push(word);
    }

} while (word !== "");

let mapa = grupoPalabras(listWords);

mapa.forEach(function (valor, clave) {
    console.log(`Clave: ${clave}, Valor: ${valor}`)
})