var firstNumber;
var secondNumber;
var sum = 0;

while (!isFinite(firstNumber) || !((firstNumber ^ 0) === firstNumber)) {
    firstNumber = +prompt('Enter the first number:');
}

while (!isFinite(secondNumber) || !((secondNumber ^ 0) === secondNumber)) {
    secondNumber = +prompt('Enter the second number:');
}

if (firstNumber <= secondNumber) {
    for (var i = firstNumber; i <= secondNumber; i++) {
        sum += i;
    }
    console.log('Sum of numbers = ' + sum);
} else {
    console.log('The second number less than the first!');
}