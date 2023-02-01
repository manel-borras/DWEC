export function timer(time) {
  var promesa = new Promise((resolve, eject) => {
    var tmp1 = setTimeout(() => {
      clearTimeout(tmp2);
      resolve("Tiempo completado");
    }, parseInt(time));

  var tmp2 = setTimeout(() => {
      clearTimeout(tmp1);
      reject("Error");
    }, parseInt(time));
    
  });
  return promesa;
};
//Export the function as async
export async function count(num, element=document.body, time=1000, f){
  try{
    //Bucle for counting down the numbers until it arrives to 0
    for (let i = num; i >= 0; i--) {
      //Awaits until the promise is resolved to continue the program
      await timer(time);
      //Put the number in the document
      element.textContent = i;
    }
    //Callback function that prints the text that we put on the function 
    if (f) f();
  }catch(e){
    console.log("Error + " + e);
  }
}