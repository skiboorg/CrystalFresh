let modal = document.getElementById('myModal');

let span = document.getElementsByClassName("close")[0];
let mobile_button = document.getElementById("mobile-button");
let mobile_menu = document.getElementById("menu-mobile");

span.onclick = function () {
    modal.style.display = "none";

}

function showmodal(){
     modal.style.display = "block";

}

mobile_button.onclick = function () {
       console.log(this)

      mobile_menu.classList.toggle('is-visible');

}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let curSlide=1

let slides = {
    slide1: {
    img: 'img/slide1-1.jpg',
    header: 'test',
    text: 'test'
  },
       slide2: {
    img: 'img/slide1-1.jpg',
    header: 'test',
    text: 'test'
  }
}


function prevSlide() {

}

function nextSlide() {
    let overlayHeader = document.getElementById("overlay-header");
    let overlayText = document.getElementById("overlay-text");
    overlayHeader.innerHTML=slides['slide'+curSlide].header
    console.log(slides['slide'+curSlide])



    return false

}