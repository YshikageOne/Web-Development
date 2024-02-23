let difficulty = prompt("Enter the difficulty level (Easy, Medium, Hard): ");

switch(difficulty){

    case "Easy":
        console.log("Message: You selected Easy difficulty. Enjoy the game!");
        break;

    case "Medium":
        console.log("Message: You selected Medium difficulty. Get ready for a challenge!");
        break;

    case "Hard":
        console.log("Message: You selected Hard difficulty. Brace yourself for a tough gameplay!");
        break;

    default:
        console.log("Invalid difficulty level.");
        break;
}