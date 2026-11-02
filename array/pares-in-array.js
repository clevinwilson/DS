const arr1=[1,4,2,2,2,4], arr2=[2,2,4,1];
const duplicates = [];
const hashMap = {};

// for(let i = 0; i<arr1.length; i++){
//     let current = arr1[i];
//     for(let j =0; j<arr2.length; j++){
//         if(current === arr2[j]){
//             duplicates.push(arr1[i]);
//             arr2.splice(j, 1);
//             break;
//         }
//     }
// }

// console.log(duplicates)


for(num of arr2){
    hashMap[num]=(hashMap[num] || 0) + 1;
}

for(num of arr1){
    if(hashMap[num]){
        duplicates.push(num);
        hashMap[num]--;
    }
}

console.log(duplicates)
