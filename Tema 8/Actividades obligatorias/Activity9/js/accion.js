let lista = document.getElementById("lista");
let button = document.getElementById("mas");
let task = document.getElementById("tarea");

//We grab the ul element, the button to add a new task and another element to get the user's task

button.addEventListener("click", function (click) {
//Get when the user clicks the add task button
  click.preventDefault();
//Add this to prevent that when we press the button it reloads the page
  var li = document.createElement("li");
  var remover = document.createElement("a");
//Create the li element and the delete button (the delete button is a link)
  remover.textContent = "Delete";
  li.appendChild(document.createTextNode(task.value));
  li.appendChild(remover);
  lista.appendChild(li);
//Add to the list the new task with the remove button
  task.value="";
//Deletes the task in the textbox when the user adds it
  li.addEventListener("click", function (click) {
    lista.insertBefore(li, lista.children[0]);
  });
//When the users click a task it goes to the first place

  remover.addEventListener("mousedown", function (click) {
    var elemento = this.parentNode.parentNode;
    elemento.removeChild(li);
  });
//When the user clicks in the remove button it deletes the li element. I am using mousedown because if I use the click listener it doesn't work

  remover.addEventListener("mouseenter", function (over) {
    li.style.textDecoration = "line-through";
  });

  remover.addEventListener("mouseleave", function (over) {
    li.style.textDecoration = "none";
  });

});