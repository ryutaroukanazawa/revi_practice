/*
===============
Scroll Motion : ScrollReveal
===============
*/

ScrollReveal().reveal(".move-to-right", {
  origin: "left",
  distance: "70px",
  duration: 2800,
});

ScrollReveal().reveal(".move-to-left", {
  origin: "left",
  distance: "70px",
  duration: 2800,
});

ScrollReveal().reveal(".move-to-bottom", {
  origin: "top",
  distance: "70px",
  duration: 2800,
});

/*
===============
header nav : position: fixed
===============
*/
const fixed = document.getElementById("ps-fixed");

window.addEventListener('scroll', function () {
  
  // ターゲットの画面トップからの距離
  target_position1 = document.querySelector('#target-hd').getBoundingClientRect().top;
  target_position2 = document.querySelector('#target-ft').getBoundingClientRect().top;

  // headerの高さを取得
  var hd_height = "-" + $("#target-hd").height();
  
  // headerが画面内に入っている&&headerの高さを越したら
    if (target_position1 <= window.innerHeight && hd_height <= target_position1) {
      fixed.style.position = "absolute";
    }
    // footerが画面内に表示されたら
    else if (target_position2 <= window.innerHeight) {
      fixed.style.position = "absolute";
    }
    else
    {
      fixed.style.position = "fixed";
    }
});