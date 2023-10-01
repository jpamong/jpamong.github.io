// IMAGE GALLERY JAVASCRIPT

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");


function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}


function closeFullImg(){
    fullImgBox.style.display = "none";
}

// END IMAGE GALLERY JAVASCRIPT


// SIDE NAVBAR JAVASCRIPT
var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")
sideNav.style.right = "-250px";

menuBtn.onclick = function(){
  if(sideNav.style.right == "-250px"){
     sideNav.style.right = "0";
     menu.src = "../images/close.png";
  }
  else{
    sideNav.style.right = "-250px";
    menu.src = "../images/menu.png";
  }
}
// END SIDENAVBAR JAVASCIRPT

