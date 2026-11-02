let arr1 = [1, 2, 2, 3, 4];
let arr2 = [2, 2, 4, 6];

let frequencyMap = new Map();
let result = []

for(let i = 0;i<arr1.length; i++){
    frequencyMap.set(arr1[i],(frequencyMap.get(arr1[i]) || 0) + 1)
}


for(let j = 0; j<arr2.length; j++){
    if(frequencyMap.get(arr2[j]) > 0){
        result.push(arr2[j]);
        frequencyMap.set(arr2[j], frequencyMap.get(arr2[j]) - 1)
    }
}




console.log(result);