let headers = 'X-Content-Type-Options: "nosniff"';

let main = document.querySelector("main");

navigator.geolocation.getCurrentPosition(pos =>{
  main.textContent = `Latitud: ${pos.coords.latitude}. Longitud: ${pos.coords.longitude}`
});