let sentence = prompt("Enter a sentence: ");

let upperCaseCount = 0;

for(let i = 0; i < sentence.length; i++){

    if(sentence[i] === sentence[i].toUpperCase() && sentence[i] !== sentence[i].toLowerCase()){
        upperCaseCount++;
    }
}

console.log(`Number of uppercase letters: ${upperCaseCount}`);