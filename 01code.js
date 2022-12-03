const fs = require('fs')
const list = fs.readFileSync('01input.txt').toString().split('\n')
let elves = []
let start = 0
for(let i = 0; i < list.length; i++){
    if(!list[i]){
        elves.push(list.slice(start,i).reduce((a,b) => a + +b,0))
        start = i + 1
    }
}
    
console.log(elves.sort((a,b) => a - b).slice(-3).reduce((a,b) => a + b, 0))
