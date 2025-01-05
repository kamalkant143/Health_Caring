const hamBurgar = document.querySelector(".hemburgar");
const navbarList = document.querySelector(".nav-bar-list");

const navBar = document.querySelector(".nav-wrapper");

window.addEventListener("scroll", () => {
  navBar.classList.toggle("fixed", window.scrollY > 50);
});


// +++++++ navabar and hamburgar javascript +++++++

hamBurgar.addEventListener("click", () => {
  navbarList.classList.toggle("navout");
});

window.addEventListener("scroll", () => {
  navbarList.classList.remove("navout");
});
