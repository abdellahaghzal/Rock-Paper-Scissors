const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	let choice_index = Math.floor(Math.random() * 3);
	return (choices[choice_index]);
}

function getHumanChoice() {
	let choice = String(prompt("What will you play?").toLowerCase());
	if (!choices.includes(choice)) {
		do {
			choice = String(prompt("Please enter a valid move (either Rock or Paper or Scissors)").toLowerCase());
		}
		while (!choices.includes(choice));
	}
	return (choice);
}

function playRound(humanChoice, computerChoice) {
	const hc_index = choices.indexOf(humanChoice);
	const cc_index = choices.indexOf(computerChoice);
	if (hc_index === 0 && cc_index === 2) {
		humanScore += 1;
		console.log(`You win! ${humanChoice} beats ${computerChoice}`);
	} else if (cc_index === 0 && hc_index === 2) {
		computerScore += 1;
		console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
	} else if (hc_index > cc_index) {
		humanScore += 1;
		console.log(`You win! ${humanChoice} beats ${computerChoice}`);
	} else if (hc_index < cc_index) {
		computerScore += 1;
		console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
	} else {
		console.log("Tie!");
	}
}

function playgame() {
	humanScore = 0;
	computerScore = 0;
	for (let i = 0; i < 5; i++) {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();
		playRound(humanSelection, computerSelection);
	}
	if (humanScore < computerScore) {
		console.log("The Computer wins this game!");
	} else if (humanScore > computerScore) {
		console.log("The Human wins this game!");
	} else {
		console.log("This game has no winner. It's a Tie!");
	}
}

playgame()
