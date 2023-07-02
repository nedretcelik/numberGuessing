let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = () => {
    return Math.floor(Math.random()*9);


} 

const compareGuesses = (humanG, computerG, targetNum) => {
    const humanDifference = Math.abs(targetNum -humanG);
    const computerDifference = Math.abs(targetNum -computerG);

    if(humanDifference <= computerDifference) {
        return true;
    }else {
        return false;
    }
}

const updateScore = winner => {
    if(winner === "human") {
        humanScore++;
    } else if ("computer"){
        computerScore++;
    }

}

const advanceRound =() => {
    currentRoundNumber ++;

}