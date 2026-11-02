const arr = [1, 2, 3, 4, 5, 6, 7],
  k = 3;

function reverseArrayElements(arr, start, end) {
    let i = start;
    let j = end;

    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        i++;
        j--;
    }
  
}



reverseArrayElements(arr, 0, arr.length - 1);
reverseArrayElements(arr, 0, 2);
reverseArrayElements(arr, k , arr.length - 1);
console.log(arr);
