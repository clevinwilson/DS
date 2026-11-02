function countLetters(message){
    let lettersCount = new Map();
    for(const char of message){

        // if(!lettersCount.has(char)) {
        //     lettersCount.set(char,1);
        // } else {
        //     lettersCount.set(char,lettersCount.get(char)+1)
        // }

        lettersCount.set(char,(lettersCount.get(char) || 0) + 1)
    }

    return lettersCount;
}

console.log(countLetters("Haaaaii"));
