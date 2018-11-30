var numberOfPeople;
var minAge;
var maxAge = 0;
var averageAge = 0;
var sumAge = 0;

while (!isFinite(numberOfPeople) || !(numberOfPeople ^ 0 === numberOfPeople) || (numberOfPeople < 0)) {
    numberOfPeople = +prompt('Сколько людей посетило поликлинику за день?');
}

for (var i = 1; i <= numberOfPeople; i++) {
    var age = null;

    while (!isFinite(age) || !(age ^ 0 === age) || (age < 0)) {
        age = +prompt('Введите возраст ' + i + '-го посетителя:');
    }

    sumAge += age;

    if (age > maxAge) {
        maxAge = age;
    }

    if (!isFinite(minAge) || (age < minAge)) {
        minAge = age;
    }
}

averageAge = sumAge / numberOfPeople;

console.log('Количество людей, которые посетили поликлинику сегодня: ' + numberOfPeople);
console.log('Максимальный возраст посетителя: ' + maxAge);
console.log('Минимальный возраст посетителя: ' + minAge);
console.log('Средний возраст посетителей: ' + averageAge);