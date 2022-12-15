let mostrar = document.getElementById("mostrarDescripcion");
let descripcion = document.getElementById("fDescripcion");
let foto = document.getElementById("imagen");
let tipo = document.getElementById("tipo");

descripcion.style.display="none";

mostrar.addEventListener("click", function(click) {
  if (descripcion.style.display === "none") {
    descripcion.style.display = "block";
} else {
    descripcion.style.display = "none";
}
});


tipo.addEventListener("click", function(key){
  if (tipo.value === "distribucion") {
    console.log("has seleccionado distribucion")
    foto.src="./imgs/distribucion.jpg";
  }else if (tipo.value === "oficina") {
    console.log("has seleccionado oficina")
    foto.src="./imgs/oficina.jpg";
  } else if (tipo.value === "produccion"){
    console.log("has seleccionado produccion")
    foto.src="./imgs/produccion.jpg";
  }
});




