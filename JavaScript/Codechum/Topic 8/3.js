let x = prompt("Enter a single character (#, @, $, %, -, _, ~): ");

switch(x){
    case '#':
    case '@':
    case '$':
    case '%':
    case '-':
    case '_':
    case '~':
        console.log("Valid special character.");
        break;

    default:
        console.log("Invalid input.");
}