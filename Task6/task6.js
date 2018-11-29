var depositAmount;
var numberOfMonths;
var daysInYear = 365;
var daysInMonth = 30;
var interestRate = 5;
var profitPerMonth = 0;
var profitAtTheEnd = 0;

while (!isFinite(depositAmount) || !((depositAmount ^ 0) === depositAmount) || (depositAmount < 0)) {
    depositAmount = +prompt('Введите сумму депозита:');
}

while (!isFinite(numberOfMonths) || !((numberOfMonths ^ 0) === numberOfMonths) || (numberOfMonths < 0)) {
    numberOfMonths = +prompt('Введите количество месяцев на хранение в банке:');
}

while (numberOfMonths) {
    profitPerMonth = depositAmount * (interestRate / 100) / daysInYear * daysInMonth;
    depositAmount += profitPerMonth;
    profitAtTheEnd += profitPerMonth;
    numberOfMonths--;

    console.log('Прибыль с депозита за каждый месяц: ', profitPerMonth.toFixed(2));
}

console.log('Прибыль с депозита за весь срок: ', profitAtTheEnd.toFixed(2));
console.log('Сумма к выплате в конце срока: ', depositAmount.toFixed(2));