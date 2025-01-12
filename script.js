const hamBurgar = document.querySelector(".hemburgar");
const navbarList = document.querySelector(".nav-bar-list");
const navBar = document.querySelector(".nav-wrapper");
const apBtn =document.querySelector(".apm-btn")
const apBtnMobile =document.querySelector(".apm-btn-moblie")
const popUp =document.querySelector("#appointment-popup")
const noScroll =document.querySelector("body")
const popClose =document.querySelector(".fa-xmark")
const apformBtn =document.querySelector(".ap-btn-fr")


// +++++++ navabar scroll fixed +++++++

window.addEventListener("scroll", () => {
  navBar.classList.toggle("fixed", window.scrollY > 50);
});


// +++++++ navabar and hamburgar +++++++
hamBurgar.addEventListener("click", () => {
  navbarList.classList.toggle("navout");
});

window.addEventListener("scroll", () => {
  navbarList.classList.remove("navout");
});


// +++++++ appointment popup +++++++
apBtn.addEventListener("click",()=>{
  popUp.classList.remove("ap-hidden")
 noScroll.classList.add("no-scroll")
})
apBtnMobile.addEventListener("click",()=>{
  popUp.classList.remove("ap-hidden")
 noScroll.classList.add("no-scroll")
})

popClose.addEventListener("click",()=>{
 popUp.classList.add("ap-hidden")
noScroll.classList.remove("no-scroll")
})

