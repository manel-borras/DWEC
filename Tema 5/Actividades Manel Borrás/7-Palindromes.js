
function palindrome(str) {

  lowerCase = str.toLowerCase().replace(" ", '');
  
  fraseInv = lowerCase.split('').reverse().join('');

  if (lowerCase === fraseInv) {
    return ("Enhorabuean tieen un palindromo");
  } else {
    return ("Tu frase no es un palindromo");
  }
}

console.log(palindrome("gnomo omong"));