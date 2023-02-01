//apikey: mpsRcP5PhshykcmPisg3eqnick3jEDct


//Grab the elements we want to be interactive with the user
let button = document.getElementById("send");
let fromOption = document.getElementById("baseCoin");
let toOption = document.getElementById("convertCoin");

//Create the headers
var myHeaders = new Headers();

myHeaders.append('apikey','mpsRcP5PhshykcmPisg3eqnick3jEDct');

var objetoHeaders = { 
  method:"GET",
  mode: "cors",
  headers: myHeaders
};


//Declare the async funtion for the API to work
const convertirMonedas = async() =>{

  // console.log('se ha llamado a convertir monedas');
    //Get the values from the elements
    let to = document.getElementById('moneda1').value;
    let from = document.getElementById('moneda2').value;
    let amount = document.getElementById('baseQuantity').value;
    //Put the values and headers into the api and we check if it works
    const data = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, objetoHeaders)
      .then(respuesta => respuesta.json())
      .then(resultado => {
        document.getElementById('result').textContent=resultado.result;
        // console.log(resultado);
      }).catch(error => console.log(error));
      
    // console.log(data)
}

//Check when the button is pressed and we execute the function
button.addEventListener("click", function(click){
  click.preventDefault();
  convertirMonedas();
});