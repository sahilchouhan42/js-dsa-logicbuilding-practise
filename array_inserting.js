// let array  = [1, 2, 3, 4, 5, 7]
// let target = 6;
// let position = 1;

// for(let i=array.length-1; i>=0; i--){
//     if(i>=position){
//         array[i+1] = array[i];
//         console.log(array)
//         if(i==position){
//             array[i] = number
//         }
        
//     }
// } 
// console.log(array)

function insertElementinArray(array, position, target){
    for(let i=array.length-1; i>=0; i--){
        if(i>=position){
            array[i+1] = array[i];
            if(i==position){
                array[i] = target
            }
        }
    }
    console.log(array)
}

let array = [22, 33, 54, 65, 77]

insertElementinArray(array, 1, 32)