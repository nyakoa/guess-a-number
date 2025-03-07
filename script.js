let targetNumber = Math.floor(Math.random() * 10) + 1;
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const feedback = document.querySelector("#feedback");
const body = document.querySelector("body");
//Set scores to zero

let initialScore = 20;
let highestScore = 0;
score.textContent = initialScore;
highscore.textContent = highestScore;
function guessNumber() {
  // Generate random numbers

  const guess = Number(document.querySelector(".guess").value);

  // Update
  if (isNaN(guess) || guess < 1) {
    feedback.textContent = "Please enter a number between 1 and 10.";
    return;
  }
  if (guess === targetNumber) {
    feedback.textContent = "Correct! You guessed right 🎉.";

    if (highestScore < initialScore) {
      highestScore = initialScore;

      highscore.textContent = highestScore;
      saveData();
    }

    document.querySelector(".guess").value = "";
  } else {
    feedback.textContent =
      guess > targetNumber ? "Sorry. Too high 📈." : "Sorry. Too low. 📉";
    initialScore--;
    score.textContent = initialScore;
    document.querySelector(".guess").value = "";
  }
  if (initialScore === 0) {
    feedback.textContent = "Game Over! Try again.";
    feedback.style.color = "rgb(181, 35, 35)";
  }
}

function resetGame() {
  targetNumber = Math.floor(Math.random() * 10) + 1; // Generate new number
  initialScore = 20; // Reset score
  score.textContent = initialScore;
  feedback.textContent = "New game started! Guess again.";
  feedback.style.color = "#333";

  document.querySelector(".guess").value = "";
}

function saveData() {
  localStorage.setItem("data", highscore.innerHTML);
}
function getData() {
  highscore.innerHTML = localStorage.getItem("data");
}
