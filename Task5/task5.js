var numberOfPeople;
var ageArray = [];

while (!isFinite(numberOfPeople) || !(numberOfPeople ^ 0 === numberOfPeople) || (numberOfPeople < 0)) {
    numberOfPeople = +prompt('How many people visited the clinic today?');
}

for (var i = 1; i <= numberOfPeople; i++) {
    var age = null;

    while (!isFinite(age) || !(age ^ 0 === age) || (age < 0)) {
        age = +prompt('Enter age for the ' + i + 'st:');
    }

    ageArray.push(age);
}

var maxAge = Math.max.apply(null, ageArray);
var minAge = Math.min.apply(null, ageArray);
var averageAge = ageArray.reduce((a, b) => a + b, 0) / ageArray.length;

console.log(numberOfPeople + ' visited the clinic.');
console.log('Max age: ' + maxAge);
console.log('Min age: ' + minAge);
console.log('Average age: ' + averageAge);