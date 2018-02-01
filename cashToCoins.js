const dollarAmount = 2872345345432.48;
const piggyBank = {
    quarters:0,
    dimes:0,
    nickels:0,
    pennies:0,
}

piggyBank.quarters = Math.floor(dollarAmount / .25);

var remainAmount = dollarAmount % .25;

console.log("remaining after quarters: " + remainAmount);

piggyBank.dimes = Math.floor(remainAmount / .1);

remainAmount = remainAmount % .1;

console.log("remaining after dimes: " + remainAmount);

piggyBank.nickels= Math.floor(remainAmount / .05);

remainAmount = remainAmount % .05

console.log("remaining after pennies: " + remainAmount);

piggyBank.pennies = Math.round(remainAmount / .01);


console.log(piggyBank);

console.log("Ben is the Greatest coder")


