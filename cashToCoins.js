const dollarAmount = 3456.67;
const piggyBank = {
    quarters:0,
    dimes:0,
    nickels:0,
    pennies:0,
}

var bigDollar = dollarAmount * 100;
console.log("dollarAmt",bigDollar);
piggyBank.quarters = Math.floor(bigDollar / 25);

var remainAmount = bigDollar % 25;

console.log("remaining after quarters: " + remainAmount);

piggyBank.dimes = Math.floor(remainAmount / 10);

remainAmount = remainAmount % 10;

console.log("remaining after dimes: " + remainAmount);

piggyBank.nickels= Math.floor(remainAmount / 5);

remainAmount = remainAmount % 5

console.log("remaining after pennies: " + remainAmount);

piggyBank.pennies = Math.round(remainAmount / 1);


console.log(piggyBank);

console.log("Ben is the Greatest coder")


