let x = parseInt(prompt("Enter the first number: "));
let y = parseInt(prompt("Enter the second number: "));

let logic1 = x == y;
let logic2 = x > 0;

let logic = !logic1 && !logic2;

console.log(logic);