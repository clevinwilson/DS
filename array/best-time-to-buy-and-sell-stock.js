let prices = [7, 1, 5, 3, 6, 1, 4]


let largest = 0;
let currentLargest = 0;
let smallest;
let currentSmallest = prices[0];

let maxProfit = 0;


for(let i=1; i<prices.length; i++){
    if(prices[i] < currentSmallest){
        currentSmallest = prices[i];
    } else {
        let sum = prices[i] - currentSmallest;
        if(sum > maxProfit){
            smallest = currentSmallest;
            largest = prices[i];
            maxProfit = sum
        }
    }
}

console.log(smallest, " : ", largest);
