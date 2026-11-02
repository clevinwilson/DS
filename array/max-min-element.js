const elements = [4, 2, 8, 1, 9];

let max = elements[0], min = elements[0];

for(let i = 0; i<elements.length; i++){
    console.log(elements[i]);
    if(elements[i] > max){
        max = elements[i];
    }

    if(elements[i] < min){
        min = elements[i];
    }
}

console.log("Max", max);
console.log("Min", min);

