



var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")
sideNav.style.right = "-250px";

menuBtn.onclick = function(){
  if(sideNav.style.right == "-250px"){
     sideNav.style.right = "0";
     menu.src = "images/close.png";
  }
  else{
    sideNav.style.right = "-250px";
    menu.src = "images/menu.png";
  }
}


const cars = document.querySelector(".about-mini").children;
function changeImage(event){
   document.querySelector(".mother-img").src=event.children[0].src
    for(let i=0; i<cars.length;i++){
        cars[i].classList.remove("active");
    }
    event.classList.add("active");
}