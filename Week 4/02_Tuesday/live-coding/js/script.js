var firstNumber = Number(prompt("Choose your first number"));
var secondNumber = Number(prompt("Choose your second number"));
if (firstNumber > secondNumber) {
    document.write("The greater number of "+firstNumber+" and "+secondNumber+" is "+firstNumber);
} else if (secondNumber > firstNumber) {
    document.write("The smaller number of "+firstNumber+" and "+secondNumber+" is "+firstNumber);
} else {
    document.write(firstNumber+" is equal to "+secondNumber);
}