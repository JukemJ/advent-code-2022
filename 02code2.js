// X lose
// Y draw
// Z win

const fs = require('fs')
const games = fs.readFileSync('02input.txt').toString().split('\n')
let score = 0
let games2 = []
for (let game of games){
    let ele = []
    if(game[0] === 'A'){
        ele.push('A')
        if(game[2] == 'X') ele.push('Z')
        if(game[2] == 'Y') ele.push('X')
        if(game[2] == 'Z') ele.push('Y')
    }
    if(game[0] === 'B'){
        ele.push('B')
        if(game[2] == 'X') ele.push('X')
        if(game[2] == 'Y') ele.push('Y')
        if(game[2] == 'Z') ele.push('Z')
    }
    if(game[0] === 'C'){
        ele.push('C')
        if(game[2] == 'X') ele.push('Y')
        if(game[2] == 'Y') ele.push('Z')
        if(game[2] == 'Z') ele.push('X')
    }
    games2.push(ele)
}
for(let game of games2){
    if(game[0] === 'A'){        // opponent plays rock
        if(game[1] === 'Z') score += 3
        if(game[1] === 'Y') score += 8
        if(game[1] === 'X') score += 4
    }
    if(game[0] === 'B'){        // opponent plays paper
        if(game[1] === 'Z') score += 9
        if(game[1] === 'Y') score += 5
        if(game[1] === 'X') score += 1
    }
    if(game[0] === 'C'){        // opponent plays scissors
        if(game[1] === 'Z') score += 6
        if(game[1] === 'Y') score += 2
        if(game[1] === 'X') score += 7
    }
}
console.log(score)