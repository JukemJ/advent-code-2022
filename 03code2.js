const fs = require('fs')
const input = fs.readFileSync('03input.txt').toString().split('\n')
const priority = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let sum = 0

for(let i = 0; i < input.length; i += 3){
    for(let item of input[i]){
        if(input[i+1].includes(item) && input[i+2].includes(item)){
            sum += priority.indexOf(item)
            break
        }
    }
}
console.log(sum)