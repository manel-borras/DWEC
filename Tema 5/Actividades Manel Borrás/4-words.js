const setWords = new Set();
var arrayWords = [];
//defines an array called arrayWords

var word = prompt("Write a word ,or leave it empty if you want to finish");
//Asks the user to give the program a word
while (word != null && word != "") {
//The wile loop checks if the word is distinct to null and if the word is distinct to "" 
    setWords.add(word);
//Using the set the program adds a new value to the variable word
    word = prompt("Write a word ,or leave it empty if you want to finish");
//Here the program asks again if we want to write a word, it could also be done using the do...while statement
}
arrayWords = [...setWords];
//Inserts into the arrayWords the set of words that we have collected from the loop
arrayWords.sort((a, b) => (-a.localeCompare(b, "es")));
//Sorts the array inversely using the spanish alphabet with the localCompare function 
arrayWords.forEach(function (w) {
    document.write(`<p>${w}</p>`);
})
//Uses forEach to write on the webpage all the values in the array