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
