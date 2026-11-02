function changeLetter(message, number) {
  let newMessage = [];
  for (const char of message) {
    let newLetterPosition = char.charCodeAt(char) + (number % 26);

    if (newLetterPosition <= 122) {
      newMessage.push(String.fromCharCode(newLetterPosition));
    } else {
      let newStringPosition = 96 + (newLetterPosition % 122);
      newMessage.push(String.fromCharCode(newStringPosition));
    }
  }
  return newMessage.join("")
}

console.log(changeLetter("hai", 2));
