const fs = require('fs')
const input = fs.readFileSync('03input.txt').toString().split('\n')
const priority = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let sum = 0
//split rucksacks into two compartments
bags = input.map(x => [x.slice(0,x.length/2),x.slice(x.length/2)])

//find the item in both compartments
for(let bag of bags){
    for(let item of bag[0]){
        if(bag[1].includes(item)){
            sum+= priority.indexOf(item)
            break
        }
    }
}
console.log(sum)