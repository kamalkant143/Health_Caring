const hamBurgar =document.querySelector(".hemburgar")
const navbarList=document.querySelector(".nav-bar-list")

 
let navBar=document.querySelector(".nav-wrapper")

window.addEventListener("scroll",()=>{
  navBar.classList.toggle("fixed" ,window.scrollY > 50)
}

)

hamBurgar.addEventListener("click",()=>{
  navbarList.classList.toggle("navout")
})

window.addEventListener("scroll" ,()=>{
  navbarList.classList.remove("navout")
   
})