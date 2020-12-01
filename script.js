document.getElementById("getfulldate").innerHTML = new Date().getFullYear();

window.onscroll = () => {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function modal() {
  $(".ui.modal.modal1").modal("show");
}

function modal1() {
  $(".ui.modal.modal2").modal("show");
}

function modal2() {
  $(".ui.modal.modal3").modal("show");
}

function modal3() {
  $(".ui.modal.modal4").modal("show");
}
