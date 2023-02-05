//Get the elements from the html code
let button = document.getElementById("mas");
let textBox = document.getElementById("tarea");
let ul = document.getElementById("lista");

/*NOTES*/
//There is 1 bug that makes that you can only delete items from the list from down to up.
//I didn´t know how to make the add task to the list using a function.



if (localStorage.datos === undefined) {
//Set the new array set
var listaTareas = new Set();
} else {
var listaTareas = new Set();  
let listaGuardada = localStorage.datos.split(",");
listaGuardada.forEach(element => {
  listaTareas.add(element);
  var array = Array.from(listaTareas).sort();
    //Set the content of the ul to nothing so the array doesn't repeat
    ul.innerHTML = "";
    //Do a for loop of the length of the array to print in the list the values
    for (let i = 0; i < array.length; i++) {
      //Create a link for deletting the entries
      var del = document.createElement("a");
      //Set the text of the link to eliminar
      del.textContent = "ELIMINAR"
      //Create the li
      let li = document.createElement("li");
      //Append the li to the ul
      ul.append(li)
      //Set the li inner text to the value of the position in the array
      li.innerText = `${array[i]}`
      //Add the del link to the li
      li.append(del);
      //Add an event listener so when the user clicks the delete link we delete the value from the original array set and remove the li element
      del.addEventListener("click", function () {
        listaTareas.delete(array[i])
        array.splice(i, 1);
        li.remove();
        localStorage.setItem("datos", array);
      });
    }
});
}

//Add an eventlistener for when we press the button
button.addEventListener("click", function (button) {
  button.preventDefault();
  //Get the text that is put in the tarea textbox and delete the text when we got it
  let tarea = textBox.value;
  textBox.value = "";

  //If the array set already have the value we show an alert
  if (listaTareas.has(tarea)) {
    alert("La tarea que has intentado añadir ya existe");
    return;
  }
  //If the value is not in the array we do the following:
  else {
    //Add the value to the array set
    listaTareas.add(tarea)
    //Convert the array set to an array so we can sort it
    array = Array.from(listaTareas).sort();
    //Set the content of the ul to nothing so the array doesn't repeat
    ul.innerHTML = "";
    //Do a for loop of the length of the array to print in the list the values
    for (let i = 0; i < array.length; i++) {
      //Create a link for deletting the entries
      var del = document.createElement("a");
      //Set the text of the link to eliminar
      del.textContent = "ELIMINAR"
      //Create the li
      let li = document.createElement("li");
      //Append the li to the ul
      ul.append(li)
      //Set the li inner text to the value of the position in the array
      li.innerText = `${array[i]}`
      //Add the del link to the li
      li.append(del);
      //Add an event listener so when the user clicks the delete link we delete the value from the original array set and remove the li element
      del.addEventListener("click", function () {
        listaTareas.delete(array[i])
        array.splice(i, 1);
        li.remove();
        localStorage.setItem("datos", array);
      });
    }
  }
  localStorage.setItem("datos", array);
  console.log(array);
});
