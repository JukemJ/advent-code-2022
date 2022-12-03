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