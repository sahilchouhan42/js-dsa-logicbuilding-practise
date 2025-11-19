let data = [2, 3, 5, 6, 7, 9]

// let target = 2;
// for(let i=0; i<data.length; i++){
//     if(i===target){
//         console.log(data[target])
//     }
// }

function findArrayElement(target){
    target = parseInt(target)
    for(let i=0; i<data.length; i++){
        if(i==target){
            console.log(`Element at target ${target} is ${data[target]} `)
        } else{
            console.log('Please give valid input')
        }
    }
}

findArrayElement(5)