const slideBox = document.querySelectorAll(".care-box");
const slider = document.querySelectorAll(".button");

const insideDiv = document.createElement("div");
insideDiv.className = "button";
const insideDivTwo = document.createElement("div");
insideDivTwo.className = "button";

slider.appendChild(insideDiv);
slider.appendChild(insideDivTwo);

slider.addEventListener("click", function () {
  slideBox.forEach(function () {
    console.log(slideBox);
  });
});

