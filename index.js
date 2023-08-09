const choices = ["rock", "paper", "scissors"]
const winners = [];

function game(){
  for(let i = 0; i <= 5; i++){
    playRound();
  }
  logWins();
}

function playRound(){
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
}

function playerChoice(){
  let input = prompt("Type rock, paper, or scissors");
  while(input == null){
    input = prompt("Type rock, paper, or scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input)
  while(check == false){
    input = prompt("Type rock, paper, or scissors. Spelling needs to be exact");
    while(input == null){
      input = prompt("Type rock, paper, or scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function computerChoice(){
  return choices[Math.floor(Math.random()*choices.length)]
}

function validateInput(choice){
  if(choices.includes(choice)){
    return true;
  }
  return false;
}

function checkWinner(choiceP, choiceC){
  if(choiceP === choiceC){
    return 'Tie';
  }
  else if((choiceP === "rock" && choiceC === "scissors") || 
            (choiceP === "paper" && choiceC === "rock") ||
            (choiceP === "scissors" && choiceC === "paper")){
              return 'Player';
            }
  else {
    return 'Computer';
  }
    
}

function logWins(){
  console.log(winners)
}

game();
/*
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
    return `The human wins. ${playerSelection} absolutely beats ${computerSelection}.`
  }
  else {
    return `The computer wins. ${computerSelection} demolishes ${playerSelection}. Death to all humans.`
  }
}

function getPlayerChoice(){
  let validatedInput = false;
  while(validatedInput == false){
    const choice = prompt["stein, papir, eller saks"];
    if(choice == null){
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if(options.includes(choiceInLower)){
      validatedInput == true;
      return choiceInLower;
      
    }
    
  }

}

function game (){
  let scorePlayer = 0;
  let scoreComputer = 0;
  for (i = 0; i < 5; i++){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (checkWinner(playerSelection, computerSelection) == "Player"){
      scorePlayer ++;
    }
    else if (checkWinner(playerSelection, computerSelection) == "Computer"){
      scoreComputer ++;
    }
  }
  console.log("The game is over.")
  if(scorePlayer > scoreComputer){
    console.log("The humans win this time.")
  }
  else if(scorePlayer < scoreComputer){
    console.log("Computers win, you human meatbags.")
  }
  else {
    console.log("Somehow its a tie!")
  }
}

game()
*/