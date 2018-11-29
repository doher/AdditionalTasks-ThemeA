var numberOfPeople;
var ageArray = [];

while (!isFinite(numberOfPeople) || !(numberOfPeople ^ 0 === numberOfPeople) || (numberOfPeople < 0)) {
    numberOfPeople = +prompt('Сколько людей посетило поликлинику за день?');
}

for (var i = 1; i <= numberOfPeople; i++) {
    var age = null;

    while (!isFinite(age) || !(age ^ 0 === age) || (age < 0)) {
        age = +prompt('Введите возраст ' + i + '-го посетителя:');
    }

    ageArray.push(age);
}

var maxAge = Math.max.apply(null, ageArray);
var minAge = Math.min.apply(null, ageArray);
var averageAge = ageArray.reduce((a, b) => a + b, 0) / ageArray.length;

console.log('Количество людей, которые посетили поликлинику сегодня: ' + numberOfPeople);
console.log('Максимальный возраст посетителя: ' + maxAge);
console.log('Минимальный возраст посетителя: ' + minAge);
console.log('Средний возраст посетителей: ' + averageAge);