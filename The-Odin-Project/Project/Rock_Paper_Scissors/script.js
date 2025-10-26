let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) return "rock";
  if (randomNumber === 1) return "paper";
  return "scissors";
}

function getHumanChoice() {
  return prompt("Rock, Paper or Scissors").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    return "You win this round!";
  }

  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    return "You lose this round!";
  }

  return "This round is a tie!";
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log(`Round ${i}`);
    console.log(`You: ${humanChoice}`);
    console.log(`Computer: ${computerChoice}`);
    console.log(playRound(humanChoice, computerChoice));
    console.log(`Score => You: ${humanScore} | Computer: ${computerScore}`);
    console.log("--------------------");
  }

  if (humanScore > computerScore) console.log("You won the game!");
  else if (humanScore < computerScore) console.log("Computer won the game!");
  else console.log("Game ended in a tie!");
}

playGame();
