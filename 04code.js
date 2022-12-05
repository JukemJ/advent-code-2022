const fs = require('fs')
const input = fs.readFileSync('04input.txt').toString().split('\n').map(x => x.split(',').map(y => y.split('-')))
let count = 0
for(let pair of input){
    if ((+pair[0][0] <= +pair[1][0] && +pair[0][1] >= +pair[1][1]) || 
        (+pair[1][0] <= +pair[0][0] && +pair[1][1] >= +pair[0][1])){
            console.log(pair)
            count++
        }
}
console.log(count)