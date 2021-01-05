var link = "/";
link.split(".html")[0];
window.history.replaceState(null, null, link);

$(document).ready(main);

var contador = 1;

function main() {
  $(".menu_bar").click(function () {
    if (contador == 1) {
      $("nav").animate({
        left: "0",
      });
      contador = 0;
    } else {
      contador = 1;
      $("nav").animate({
        left: "-100%",
      });
    }
  });

  // Mostramos y ocultamos submenus
  $(".submenu").click(function () {
    $(this).children(".children").slideToggle();
  });
}

document.getElementById("getfulldate").innerHTML = new Date().getFullYear();

// window.onscroll = () => {
//   myFunction();
// };

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

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
