// Element selectors
const buttons = document.querySelectorAll(".button");
const roundResult = document.querySelector("#round-result");
const gameResults = document.querySelector("#game-results");
const winsText = document.querySelector("#wins-count");
const tiesText = document.querySelector("#ties-count");
const lossText = document.querySelector("#loss-count");

// The click event
const clickEvent = (e) => {
	roundResult.textContent = `${playRound(
		`${e.target.id}`,
		getComputerChoice()
	)}`;
	if (result === "win") {
		winsText.textContent = winsCount;
	} else if (result === "tie") {
		tiesText.textContent = tiesCount;
	} else {
		lossText.textContent = loseCount;
	}
	roundResult.classList.remove("hidden");

	if (winsCount == 5) {
		alert("You won the game!");
		window.location.reload();
	} else if (loseCount == 5) {
		alert("You lose!");
		window.location.reload();
	}
};

// Event listener for clicking the buttons, initiate the click event
buttons.forEach((button) => {
	button.addEventListener("click", clickEvent);
});

// Get a random computer choice
function getComputerChoice() {
	const choicesArr = ["rock", "paper", "scissors"];
	const choice = Math.floor(Math.random() * choicesArr.length);
	console.table;
	return choicesArr[choice];
}

// Initiate counts
let winsCount = 0;
let tiesCount = 0;
let loseCount = 0;
let result = "";

// Play a round
function playRound(playerSelection, computerSelection) {
	if (playerSelection == null) {
		return;
	}
	const playerChoice = playerSelection.toLowerCase();
	const computerChoice = computerSelection;

	if (playerChoice === "rock") {
		if (computerChoice === "rock") {
			result = "tie";
			tiesCount++;
			return "It's a tie! Rock vs Rock";
		} else if (computerChoice === "paper") {
			result = "lose";
			loseCount++;
			return "You lose! Paper beats Rock";
		} else {
			result = "win";
			winsCount++;
			return "You won! Rock beats Scissors";
		}
	} else if (playerChoice === "paper") {
		if (computerChoice === "rock") {
			result = "win";
			winsCount++;
			return "You won! Paper beats Rock";
		} else if (computerChoice === "paper") {
			result = "tie";
			tiesCount++;
			return "It's a tie! Paper vs Paper";
		} else {
			result = "lose";
			loseCount++;
			return "You lose! Scissors beats Paper";
		}
	} else if (playerChoice === "scissors") {
		if (computerChoice === "rock") {
			result = "lose";
			loseCount++;
			return "You lose! Rock beats Scissors";
		} else if (computerChoice === "paper") {
			result = "win";
			winsCount++;
			return "You won! Scissors beats Paper";
		} else {
			result = "tie";
			tiesCount++;
			return "It's a tie! Scissors vs Scissors";
		}
	}
}
