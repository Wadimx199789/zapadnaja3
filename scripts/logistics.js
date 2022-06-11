const clientButtons = document.querySelectorAll('.clients-logos__button');
const retails = document.querySelector(".clients-logos__retailes");
const horeca = document.querySelector(".clients-logos__slider");

clientButtons.forEach((clientButton)=>{
    clientButton.addEventListener("click",changeClients);
})

function changeClients(e){
    if(!e.target.classList.contains("active")){
        clientButtons.forEach((clientButton)=>{
            clientButton.classList.remove("active");
        });
        e.target.classList.add("active");
        hideClient(e);
    }
}

function hideClient(e){
    if(e.target.classList.contains("clients-logos__button--horeca")){
        retails.classList.remove("active");
        horeca.classList.add("active");
    }
    else if(e.target.classList.contains("clients-logos__button--retail")){
        horeca.classList.remove("active")
        retails.classList.add("active");
    }
}