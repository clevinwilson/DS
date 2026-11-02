let arr = [16, 17, 4, 3, 5, 2]

let currentLargest = 0;
let leaders = [];


for(let i = arr.length - 1; i>=0; i--){
    if(arr[i]>currentLargest){
        leaders.push(arr[i]);
        currentLargest = arr[i];
    }
    
}


console.log(leaders);
