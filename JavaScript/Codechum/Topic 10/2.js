let sentence = prompt("Enter a sentence: ");

let characterCount = 0;

while(sentence){
    characterCount += 1;
    sentence = sentence.substring(1);
}

console.log("Number of characters:", characterCount);