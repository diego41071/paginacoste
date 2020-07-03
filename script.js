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

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 8000); // Change image every 2 seconds
}

var myIndex1 = 0;
carousel1();

function carousel1() {
    var i;
    var x = document.getElementsByClassName("mySlides1");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex1++;
    if (myIndex1 > x.length) {
        myIndex1 = 1;
    }
    x[myIndex1 - 1].style.display = "block";
    setTimeout(carousel1, 8000); // Change image every 2 seconds
}

function modal() {
    $(".ui.modal.modal1").modal("show");
}

function modal1() {
    $(".ui.modal.modal2").modal("show");
}

function modal2() {
    $(".ui.modal.modal3").modal("show");
}