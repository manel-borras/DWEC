let changeText = document.getElementsByTagName("h1");



function addview() {
  if (isNaN(localStorage.views)) {
    localStorage.setItem("views", 0)
  }
  let views = parseInt(localStorage.views)
  views += 1;
  localStorage.setItem("views",views)
  changeText[0].textContent += localStorage.views
}

addview();

