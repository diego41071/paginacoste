window.onscroll = () => {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

myFunction = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

document.getElementById("getfulldate").innerHTML = new Date().getFullYear();

AOS.init();
