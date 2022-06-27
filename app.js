const element = document.getElementsByClassName("button-54")[0];
element.addEventListener("click", function () {
  const userName = prompt("Welcome!!, What's your name? ");
  var options = ["Rock", "Paper", "Scissors"];
  var randomIndex = Math.floor(Math.random() * options.length);
  var computerChoice = options[randomIndex];
  var userChoice = prompt("What's your choice");
  alert("The computer has chosen" + " " + computerChoice);
  if (userChoice == computerChoice) {
    alert("It's a Tie");
  } else if (computerChoice == "Rock") {
    if (userChoice == "Paper") {
      alert(userName + " " + "has won!");
    } else if (userChoice == "Scissors") {
      alert("The Computer Won!");
    } else {
      alert("You have entered gibberish");
    }
  } else if (computerChoice == "Scissors") {
    if (userChoice == "Paper") {
      alert("The Computer Won!");
    } else if (userChoice == "Rock") {
      alert(userName + " " + "has won!");
    } else {
      alert("You have entered gibberish");
    }
  } else if (computerChoice == "Paper") {
    if (userChoice == "Rock") {
      alert("The Computer Won!!");
    } else if (userChoice == "Scissors") {
      alert(userName + " " + "has won!");
    } else {
      alert("You have entered gibberish");
    }
  }
});
