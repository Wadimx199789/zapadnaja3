const burgerButton = document.querySelector(".burger");
const menu = document.querySelector(".nav");

function toggle(){
    burgerButton.classList.toggle("active");
    menu.classList.toggle("active");
    if(burgerButton.classList.contains("active")){
        burgerButton.classList.remove("close")
    }
    else {
        burgerButton.classList.add("close");
    }
}

burgerButton.addEventListener("click",toggle);



const countSuppliers = document.querySelector(".count-suppliers");
const countCountries = document.querySelector(".count-countries");
const countRetail = document.querySelector(".countRetail");
const countHoreca = document.querySelector(".countHoreca");


// // Взять элемент, анимировать до 2000 за 2 секунды
// animate({elem: span[0], to: 360, sec: 5});
// animate({elem: span[1], to: 83, sec: 5});
// animate({elem: span[2], to: 100, sec: 5});
animate({elem: countSuppliers, to:70, sec:2});
animate({elem: countCountries, to:17, sec:2});
animate({elem: countRetail, to:50, sec:5});
animate({elem: countHoreca, to:40, sec:5});

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

// // console.log(countCountries);