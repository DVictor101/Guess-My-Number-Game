"strict";
const againButton = document.querySelector(".firstagain_button");
const unknownBox = document.querySelector(".guess-sectwo_p");
const inputBox = Number(document.querySelector(".enterguess-value").value);
const gameGuidance = document.querySelector(".startguess_value");
const score = document.querySelector(".score");
const checkButton = document.querySelector(".check_button");
const body = document.querySelector("body");

//THE DOM COMMANDS

let secretNumber = Math.trunc(Math.random() * 21);
let highScore = 0;
let scored = 20;

checkButton.addEventListener("click", function () {
  const inputBox = Number(document.querySelector(".enterguess-value").value);
  console.log(inputBox);

  if (!inputBox) {
    console.log("No entered value");
  } else if (inputBox === secretNumber) {
    document.querySelector(".guess-sectwo_p").textContent = secretNumber;
    gameGuidance.textContent = "Correct number!";

    if (scored > highScore) {
      highScore = scored;
      document.querySelector(".highscore").textContent = highScore;
    }

    document.querySelector("body").style.backgroundImage =
      "linear-gradient(to right, rgb(22, 107, 150), rgb(30, 9, 42))";
    document.querySelector(".guess-sectwo-div").style.width = "150px";
    //document.querySelector(".body").style.backgroundColor = "red";
  } else if (inputBox > secretNumber) {
    if (scored > 1) {
      gameGuidance.textContent = "Too high";
      scored--;
      score.textContent = scored;
    } else {
      gameGuidance.textContent = "you lost the game";
      scored--;
      score.textContent = 0;
    }
  } else if (inputBox < secretNumber) {
    if (scored > 1) {
      gameGuidance.textContent = "Too low!";
      scored--;
      score.textContent = scored;
    } else {
      gameGuidance.textContent = "you lost the game";
      scored--;
      score.textContent = 0;
    }
  }
});
againButton.addEventListener("click", function () {
  scored = "20";
  gameGuidance.textContent = "Start Guessing";
  score.textContent = "20";
  document.querySelector("body").style.backgroundImage =
    "linear-gradient(to right, rgb(22, 150, 65), rgb(18, 42, 9))";
  secretNumber = Math.trunc(Math.random() * 21);
  document.querySelector(".guess-sectwo-div").style.width = "100px";
  Number((document.querySelector(".enterguess-value").value = ""));
  document.querySelector(".guess-sectwo_p").textContent = "?";
});
