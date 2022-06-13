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

const countSuppliers = document.querySelector(".count-suppliers");
const countCountries = document.querySelector(".count-countries");
const countRetail = document.querySelector(".countRetail");
const countHoreca = document.querySelector(".countHoreca");

function animate({elem, from = 0, to, sec}) {
    let tick = (to - from) / (60 * sec);
    loop();
    function loop() {
      elem.textContent = Math.round( from += tick );
      
      if( from >= to ) {
        // Прервать, как только дойдет до конца.
        elem.textContent = to;
        return;
      }
      
      requestAnimationFrame(loop);
    }
  }
  
  animate({elem: countSuppliers, to:70, sec:2});
animate({elem: countCountries, to:17, sec:2});
animate({elem: countRetail, to:50, sec:5});
animate({elem: countHoreca, to:40, sec:5});