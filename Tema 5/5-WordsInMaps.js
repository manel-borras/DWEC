var listWords = new Array();
var wordMap = new Map();
do {
    word = prompt("Tell me a word or leave it empty if you want to stop the program: ");    
    listWords.push(word);    
    
} while (word !== "");

listWords.pop();

for ( i in listWords) {
    i = parseInt(i);
    wordMap.set(i, listWords[i]);
}

for (let key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
            
    }
}