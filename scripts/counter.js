
const countBrends = document.querySelector(".count-brends");
const countYears = document.querySelector(".count-years");
const countProducers = document.querySelector(".count-produsers");


animate({elem: countBrends, to: 360, sec: 2});
animate({elem: countYears, to: 83, sec: 2});
animate({elem: countProducers, to: 100, sec: 2});


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

