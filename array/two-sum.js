// const arr = [4, 1, 11, 2, 15, 7],
//   target = 9;

// let pointer = 0;
// const arrayLength = arr.length;
// let i = 0, j = i + 1;
// while(i < arrayLength - 1){

    
//     if(arr[i]+arr[j]===target){
//         console.log(`Number: ${arr[i]} and ${arr[j]}`);
//         break;
//     }
    
//     j++;

//     if(j === arrayLength){
//         i++;
//         j = i + 1;
//     }
// }

//With o(n)
const arr = [4, 1, 11, 2, 15, 7],
  target = 9;
const seen = new Set();

for(const num of arr){
  const complement = target - num;
  if(seen.has(complement)){
    console.log('Nums',complement,":", num);
    break;
  }

  seen.add(num);

}


