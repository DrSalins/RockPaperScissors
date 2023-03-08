let startButton = document.querySelector(".start");
startButton.addEventListener("click", function () {
  startGame();
});
let startGame = () => {
  var userChoice = prompt("Do you want to choose rock,paper,scissors?");
  var options = ["rock", "paper", "scissors"];
  var randomNumber = Math.floor(Math.random() * options.length);
  var computerChoice = options[randomNumber];
  alert("The computer has chosen" + " " + computerChoice);
  /* The Game is Tied*/
  if (computerChoice == userChoice) {
    alert("It's a tie, Rerun to play again.");
  } else if (computerChoice == "rock") {
    if (userChoice == "paper") {
      alert("The User Wins");
    } else if (userChoice == "scissors") {
      alert("The Computer Wins");
    } else {
      alert("You have entered gibberish");
    }
  } else if (computerChoice == "paper") {
    if (userChoice == "scissors") {
      alert("The User Wins");
    } else if (userChoice == "rock") {
      alert("The Computer Wins");
    } else {
      alert("You have entered gibberish");
    }
  } else if (computerChoice == "scissors") {
    if (userChoice == "rock") {
      alert("The User Wins");
    } else if (userChoice == "paper") {
      alert("The Computer Wins");
    } else {
      alert("You have entered gibberish");
    }
  }
};
