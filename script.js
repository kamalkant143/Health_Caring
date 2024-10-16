const slideBox =document.querySelectorAll(".care-box")

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


const slider =document.querySelector(".slider-box")

    const insideDiv =document.createElement('div')
    insideDiv.className="button"
    const insideDivTwo =document.createElement('div')
    insideDivTwo.className="button"


    slider.appendChild(insideDiv)
    slider.appendChild(insideDivTwo)
