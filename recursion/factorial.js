function factOfNum(number){
    if(number<=1){
        return 1;
    }

    return number * factOfNum(number - 1)
}

console.log(factOfNum(5));
