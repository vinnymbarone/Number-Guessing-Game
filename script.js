let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Step 3
function generateTarget () {
    return Math.floor(Math.random() * 9)
};

// Step 4
function compareGuesses (humanNum, computerNum, target) {
    let userGuess = Math.abs(target - humanNum);
    let compGuess = Math.abs(target - computerNum);
   
    if (userGuess <= compGuess) {
        return true;
    } else {
        return false;
    }
  
}

// Step 5
function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else if ( winner === 'computer') {
        computerScore++;
    } 
};

// Step 6
function advanceRound() {
    currentRoundNumber++;
};

// TEST

