const arr1 = [5], arr2 = [2,2,4,6];
let output = [];

let i = 0;
let j = 0;

while(i < arr1.length){

    if(i<arr1.length){

    }


    let curr = arr1[i];
    
    if(curr < arr2[j]){
        output.push(curr);
        i++;
    } else {
        output.push(arr2[j]);
        j++;
    }
}

if(i < arr1.length){
    output = [...output,...arr1.splice(j,arr1.length)]
}

if(j < arr2.length) {
    output = [...output,...arr2.splice(j,arr2.length)]
}

console.log(output);