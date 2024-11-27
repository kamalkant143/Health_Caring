const slideBox =document.querySelectorAll(".care-box")
const slider =document.querySelectorAll(".button")

// const slider = document.querySelector(".slider-box div")


// slider.addEventListener("click",function(){
//     slideBox.classList.add("side")
// })
// let number = 2

// for (let i = 0; i <= number.length; i++) {
//     const slider =document.querySelector(".slider-box")

//     const insideDiv =document.createElement('div')
//     slider.appendChild(insideDiv)

// }

console.log(slideBox);




    const insideDiv =document.createElement('div')
    insideDiv.className="button"
    const insideDivTwo =document.createElement('div')
    insideDivTwo.className="button"


    slider.appendChild(insideDiv)
    slider.appendChild(insideDivTwo)


    slider.addEventListener("click",function(){
      slideBox.forEach(function(){
        console.log(slideBox)
      })
    })
      