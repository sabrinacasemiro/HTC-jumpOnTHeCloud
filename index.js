const c = [0, 0, 1, 0, 0, 1, 0]
let jumps = 0

for(let i = 0; i < c.length; i++){
    console.log(i, jumps, c[i+2], c[i])

    if(c[i+2] === 0){
        i++
    }
    
    if(c[i+1] !== undefined){
        jumps++

    }
}

return jumps
console.log(jumps) 