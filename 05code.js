const fs = require('fs')
const input = fs.readFileSync('05input.txt').toString().split('\n')
let ship = input.slice(0,8).map(x => x.split(' '))
let stacks = []
let obj = {}
for(let ele of ship){                                 //parsing
    let temp = []
    for(let i = 0; i < ele.length; i++){
        if(!ele[i]){
            temp.push(false)
            i += 3
        }
        else temp.push(ele[i])
    }
    stacks.push(temp)
}
for(let stack of stacks){                           //more parsing
    for(let i = 0; i < stack.length; i++){
        if(!obj[i]) obj[i] = []
        if(stack[i]) obj[i].push(stack[i])
    }
}
stacks = Object.values(obj)
let instructions = input.slice(10).map(x => x.split(' ')).map(x => [+x[1],+x[3],+x[5]])

//move x from y to z
for(let step of instructions){
    while(step[0]){
        stacks[step[2]-1].unshift(stacks[step[1]-1].shift())
        step[0]--
    }
}
console.log(stacks.map(x => x[0]).join())