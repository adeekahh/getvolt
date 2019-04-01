function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector(".battery-level").style.height = scrolled + "%";
  console.log(scrolled);
  if (scrolled > 25 && scrolled < 75) {
    document.querySelector(".battery-level").style.backgroundColor = "orange";
  } else if (scrolled > 75) {
    document.querySelector(".battery-level").style.backgroundColor = "green";
  } else {
    document.querySelector(".battery-level").style.backgroundColor = "red";
  }
}

import lax from "lax.js";

window.onload = function() {
  lax.setup(); // init

  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };

  window.requestAnimationFrame(updateLax);
};

window.onscroll = function() {
  progressBar();
};
