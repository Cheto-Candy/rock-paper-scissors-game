let msg = document.querySelector("#msg");
let playerScore = document.querySelector("#player_Score");
let computerScore = document.querySelector("#computer_Score");
let playerScoreCount = 0;
let computerScoreCount = 0;
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
rock.addEventListener("click", () => {
    let computer = computerChoice();
    let yourChoice = "rock";
    let result = checkwinner(yourChoice, computer);
    msg.innerText = result;
});
paper.addEventListener("click", () => {
    let computer = computerChoice();
    let yourChoice = "paper";
    let result = checkwinner(yourChoice, computer);
    msg.innerText = result;
});
scissors.addEventListener("click", () => {
    let computer = computerChoice();
    let yourChoice = "scissors";
    let result = checkwinner(yourChoice, computer);
    msg.innerText = result;
});
    
let computerChoice = () => {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "rock";
    } else if (random === 1) {
        return "paper";
    } else if (random === 2) {
        return "scissors";
    }
}

let checkwinner = (yourChoice, computer) => {
    if (yourChoice === computer) {
        return `computer chose ${computer} Draw`;
    } else if (yourChoice === "rock" && computer === "paper") {
        computerScoreCount++;
        computerScore.innerText = computerScoreCount;
        return "computer chose paper You Lose"; 
    } else if (yourChoice === "rock" && computer === "scissors") {
        playerScoreCount++;
        playerScore.innerText = playerScoreCount;
        return "computer chose scissors You Win";
    } else if (yourChoice === "paper" && computer === "scissors") {
        computerScoreCount++;
        computerScore.innerText = computerScoreCount;
        return "computer chose scissors You Lose";
    } else if (yourChoice === "paper" && computer === "rock") {
        playerScoreCount++;
        playerScore.innerText = playerScoreCount;
        return "computer chose rock You Win";
    } else if (yourChoice === "scissors" && computer === "rock") {
        computerScoreCount++;
        computerScore.innerText = computerScoreCount;
        return "computer chose rock You Lose";
    } else if (yourChoice === "scissors" && computer === "paper") {
        playerScoreCount++;
        playerScore.innerText = playerScoreCount;
        return "computer chose paper You Win";
    }
}