const hamBurgar = document.querySelector(".hemburgar");
const navbarList = document.querySelector(".nav-bar-list");
const navBar = document.querySelector(".nav-wrapper");
const apBtn =document.querySelector(".apm-btn")
const popUp =document.querySelector("#appointment-popup")
apBtn.addEventListener("click",()=>{
   popUp.classList.remove("ap-hidden")
})

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
