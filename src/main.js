import "./style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Hide/Show Navbar on Scroll
let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove("hidden");
  } else {
    navbar.classList.add("hidden");
  }
  prevScrollPos = currentScrollPos;
};
