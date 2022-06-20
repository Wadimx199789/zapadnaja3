const burgerButton = document.querySelector(".burger");
const menu = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");


function toggle(){
    burgerButton.classList.toggle("active");
    menu.classList.toggle("active");
    if(burgerButton.classList.contains("active")){
        burgerButton.classList.remove("close");
        overlay.classList.add("active");
        body.style.overflow="hidden";
        body.style.position = "fixed";
    }
    else {
        burgerButton.classList.add("close");
        overlay.classList.remove("active");
        body.style.position = "static";
        body.style.overflow="auto";

    }
}

burgerButton.addEventListener("click",toggle);
overlay.addEventListener("click",()=>{
    if(overlay.classList.contains("active")){
        burgerButton.classList.remove("active");
        overlay.classList.remove("active");
        menu.classList.remove("active");
        body.style.position = "static";
        body.style.overflow="auto";
    }
})

