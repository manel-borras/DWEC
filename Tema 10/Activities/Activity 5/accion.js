//Get the element named contenedor that has the imgs inside
let contenedor = document.getElementById("contenedor");
//Create the string to blur a img
var blur = "?blur=10";
//Get the id from the cookie
let imgBlurry = document.cookie.split("=")[1]

//Function that creates the imgs
createImg();

//Get all the imgs in the document
const img = document.getElementsByTagName("img")

//For that chechs if an image is blurred comparing the id from the cookies and the id from the image
for (let i = 0; i < img.length; i++) {
  if (img[i].id === imgBlurry) {
    img[i].src=`https://picsum.photos/id/${i}/300/300/${blur}`;
  }
}

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function(){
    replaceImg(i);
  });
}

function replaceImg(i){
  //Grab the id of the img the user clicks
  let imgToReplace = img[i].id;
  //Create the new src for the image to be blurry
  let newImg = img[i].src=`https://picsum.photos/id/${i}/300/300/${blur}`;
  //Replace the img the user clicks to the new one
  //Add the id of the img to the cookies so when the page is reloaded it stays blurry
  imgToReplace.replace(newImg);
  document.cookie=`id = ${imgToReplace}; max-age=604800 ; SameSite=Lax`
  //Reload the page to update the src
  location.reload();
}

function createImg(){
  for (let i = 0; i < 50; i++) {
    //Create the element img
    let crearImagen = document.createElement("img");
    //Add the url to the src
    crearImagen.src = `https://picsum.photos/id/${i}/300/300`;
    //Add the id attribute with the value
    crearImagen.id = i;
    //Append it to the div contenedor
    contenedor.append(crearImagen);
  }
}