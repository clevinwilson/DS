let arr = [3, -4, 5, 4, -1, 7, -8];;

let currentSum = 0;
let largestSum = arr[0];
let prevStart = 0
let start = 0;
let end = 0;

for(let i = 0; i<arr.length; i++){

  if(arr[i] > currentSum + arr[i]){
    start = i;
    currentSum = arr[i];
  } else {
    currentSum = currentSum + arr[i];
  }

  if(currentSum > largestSum){
    largestSum = currentSum;
    end = i
    prevStart = start;
  }

}


console.log(largestSum);
console.log(prevStart, end)
console.log(arr.slice(prevStart, end + 1));
















// let largestSum = 0;
// let largestArray = [];
// let end = 0;

// for (let i = 0; i < arr.length; i++) {
//   end = i;
//   currentElement = i;
//   let sum = 0;
//   subArray = [];

//   while (currentElement < arr.length) {
//     sum = sum + arr[currentElement];
//     subArray.push(arr[currentElement]);
//     if (currentElement == end) {
//       end++;
//       currentElement = i;
//       if (sum > largestSum) {
//         largestSum = sum;
//         largestArray = subArray;
//       }
//       subArray = [];
//       sum = 0;
//     } else {
//       currentElement++;
//     }
//   }
// }
// console.log("sum", largestSum);
// console.log("array", largestArray);
