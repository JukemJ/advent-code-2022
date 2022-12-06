const fs = require('fs')
const input = fs.readFileSync('06input.txt').toString()
//part 1
for(let i = 0; i < input.length; i++){
    if (new Set(input.slice(i,i+4).split('')).size === 4) {
        console.log(i+4)
        break
    }
}
//part 2
for(let i = 0; i < input.length; i++){
    if (new Set(input.slice(i,i+14).split('')).size === 14) {
        console.log(i+14)
        break
    }
}