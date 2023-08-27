let body = document.querySelector("body");
let cursor = document.querySelector(".cursor");

body.addEventListener("mousemove" , function(details){
    cursor.style.left= details.x + "px";
    cursor.style.top = details.y + "px";

})