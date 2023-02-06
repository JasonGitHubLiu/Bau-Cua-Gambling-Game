const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartButton = document.querySelector("#restartButton");


// need to have a start game function

// start with default money ($100)

// when I click on on a div, I want to place money on that picture

// have it ask how much money you want to put on each tile

// cant bet over what you have in your balance

// have a reset button

// After each round, you can play again, which updates your balance

function hideInstructions() {
    var x = document.getElementById("gameInstructions");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }