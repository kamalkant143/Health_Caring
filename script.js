// const slideBox = document.querySelectorAll(".care-box");
// const slider = document.querySelectorAll(".button");

// const insideDiv = document.createElement("div");
// insideDiv.className = "button";
// const insideDivTwo = document.createElement("div");
// insideDivTwo.className = "button";

// slider.appendChild(insideDiv);
// slider.appendChild(insideDivTwo);

// slider.addEventListener("click", function () {
//   slideBox.forEach(function () {
//     console.log(slideBox);
//   });
// });

// window.addEventListener("scroll",function(){
//   let navBar=document.querySelector(".nav-wrapper")
//   navBar.classList.toggle("fixed",window.scrollY > 0)
// })

let navBar=document.querySelector(".nav-wrapper")
console.log(navBar);

window.addEventListener("scroll",()=>{
  navBar.classList.toggle("fixed" ,window.scrollY > 100)
}

)