//Dirección desde la que coger los datos: https://opendata.aemet.es/opendata/api/mapasygraficos/analisis 
//APIKEY: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5lbGJvcnJhczIxQGdtYWlsLmNvbSIsImp0aSI6ImJmZDhjYzE3LWE5ZmItNGIzZS05YTZiLTMwMDZlN2Y5YTRiYiIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjczODk0MjEyLCJ1c2VySWQiOiJiZmQ4Y2MxNy1hOWZiLTRiM2UtOWE2Yi0zMDA2ZTdmOWE0YmIiLCJyb2xlIjoiIn0.nWxsC5kEPpcgWLqk_s-Q6tK2jwJwwR5L6rB_w0ShQg4

var objetoHeaders = { 
  method:"GET",
  mode: "cors",
  headers: new Headers({
    "cache-control":"no-cache"
  }),
};

let boton = document.getElementById("cargar");
let main = document.getElementById("main");
document.addEventListener("click", function(click){
  click.preventDefault();
  var apikey = document.getElementById("apikey").value;
  // console.log(apikey);

  fetch("https://opendata.aemet.es/opendata/api/mapasygraficos/analisis?api_key="+apikey, objetoHeaders)
    .then(response => {
      if (response.ok) {
        console.log("La respuesta ha sido OK, entrando a blob");
        return response.json();
      } else {
        throw new Error("Los datos no llegaron bien");
      }
    })
    .then(data => {
      console.log(data)
      fetch(data.datos, objetoHeaders)
        .then(mapa => mapa.blob())
        .then(blob=>{
          let url = URL.createObjectURL(blob);
          console.log(url);
          let imagen = document.createElement("img");
          imagen.setAttribute("src", url);
          main.innerHTML="";
          main.appendChild(imagen);
        })
    })
  
    .catch(error=>{
      console.log("Ha ocurrido un error: "+error);
    });
});