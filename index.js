const options = ["stein", "papir", "saks"];

function getComputerChoice (){
  const choice = options[Math.floor(Math.random()*options.length)];
  return choice;
}

function checkWinner(playerSelection, computerSelection){
  if(playerSelection == computerSelection){
    return "Tie"
  }
  else if(
    (playerSelection == "stein" && computerSelection == "saks") ||
    (playerSelection == "papir" && computerSelection == "stein") ||
    (playerSelection == "saks" && computerSelection == "papir")
  ){
    return "Player"
  }
  else {
    return "Computer"
  }
}

function playRound(playerSelection, computerSelection){
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie"){
    return "It is a tie."
  }
  else if (result == "Player"){
    return `The human wins. ${playerSelection} absolutely beats the shit out of ${computerSelection}.`
  }
  else {
    return `The computer wins. ${computerSelection} demolishes ${playerSelection}. Death to all humans.`
  }
}

const playerSelection = "stein";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));