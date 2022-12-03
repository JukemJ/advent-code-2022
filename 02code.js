// A rock
// B paper
// C scissors
// X rock
// Y paper
// Z scissors

// The winner of the whole tournament is the player with the highest score. Your total score is the sum of your scores for each round. The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

const fs = require('fs')
const games = fs.readFileSync('02input.txt').toString().split('\n')
let score = 0
for(let game of games){
    if(game[0] === 'A'){        // opponent plays rock
        if(game[2] === 'Z') score += 3
        if(game[2] === 'Y') score += 8
        if(game[2] === 'X') score += 4
    }
    if(game[0] === 'B'){        // opponent plays paper
        if(game[2] === 'Z') score += 9
        if(game[2] === 'Y') score += 5
        if(game[2] === 'X') score += 1
    }
    if(game[0] === 'C'){        // opponent plays scissors
        if(game[2] === 'Z') score += 6
        if(game[2] === 'Y') score += 2
        if(game[2] === 'X') score += 7
    }
}
console.log(score)