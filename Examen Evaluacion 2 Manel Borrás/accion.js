//creamos 2 variables, una para el boton de añadir y otra para añadir valores al cuerpo de la tabla
let botonNuevo = document.getElementById('nuevo');
let cuerpo = document.getElementById('cuerpoTabla');

//Creamos una variable en la que guardar el precio total y se vaya sumando
var baseImponible = 0;

//Funcion para generar y añadir nuevos productos
let genera = function () {
  //Cogemos elementos del documento desde donde extraer la información
  let producto = document.getElementById('producto').value;
  let cantidad = parseInt(document.getElementById('cantidad').value);
  let precioU = parseInt(document.getElementById('precio-unitario').value);
  //Añadimos a la variable precioTotal el precio del elemento multiplicado por la cantidad de elementos que hay
  let precioTotal = cantidad * precioU;
  //Cogemos elementos del documento para actualizar la información
  let base = document.getElementById('base-imponible');
  let iva = document.getElementById('iva');
  let total = document.getElementById('total');
  //Variable para crear un nuevo tr
  let tr = document.createElement('tr');
  //Añadimos el tr al cuerpo y añadimos dentro del tr los td con los valores necesarios
  cuerpo.append(tr);
  tr.innerHTML = `<td>${producto} <a id="detalle" href="#">Detalle</a></td><td>${cantidad}</td><td>${precioU}</td><td id=>${precioTotal}</td><td id="contieneEliminar"><a id="eliminar" href="#">Eliminar</a></td>`;
  //Se añade a baseimponible el precio total
  baseImponible += precioTotal;
  base.innerText = baseImponible;

  //Se calcula el iva y se añade al apartado iva
  iva.innerText = baseImponible * 0.21;

  //Se calcula el total de la baseimponible mas el iva
  total.innerText = parseInt(base.textContent) + parseInt(iva.textContent);

  //Se cogen los elementos donde esta el link de eliminar y detalle
  let eliminar = document.getElementById('eliminar');
  let detalle = document.getElementById('detalle');
  //Recogemos el td donde se encuentra el boton de eliminar
  let td = document.getElementById('contieneEliminar');

  //Al pulsar sobre el link de eliminar se ejecuta el código para eliminar la última línea
  eliminar.addEventListener('click', function () {
    base.innerText = baseImponible - precioTotal;
    iva.innerText = baseImponible * 0.21 - baseImponible * 0.21;
    total.innerText = parseFloat(base.textContent) - parseFloat(iva.textContent);

    td.parentNode.innerText = " ";
    console.log('Has pulsado sobre el boton de eliminar');
  });

  //Al pulsar sobre el link detalle sale un alert con todos los parámetros del producto
  detalle.addEventListener('click', function () {
    console.log('Has pulsado sobre el boton de detalle');
    alert(`Detalle de la factura: \n
      Producto: ${producto}\n
      Cantidad: ${cantidad}\n
      Precio unitario: ${precioU}\n
      Precio total: ${precioTotal} `);
  });
}


//Al pulsar sobre el botón de añadir realizamos la funcion genera
botonNuevo.addEventListener('click', function () {
  genera();
});