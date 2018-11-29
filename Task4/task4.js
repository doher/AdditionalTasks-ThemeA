var num;
var message = '';

while (!isFinite(num) || !((num ^ 0) === num) || (num < 1) || (num > 9999)) {
    num = +prompt('Введите число от 1 до 9999:');
}

numReverse = (num + '').split('').reverse().join('');

console.log(num);

if (numReverse[3]) {
    switch (numReverse[3]) {
        case '1':
            message += 'одна тысяча ';
            break;

        case '2':
            message += 'две тысячи ';
            break;

        case '3':
            message += 'три тысячи ';
            break;

        case '4':
            message += 'четыре тысячи ';
            break;

        case '5':
            message += 'пять тысяч ';
            break;

        case '6':
            message += 'шесть тысяч ';
            break;

        case '7':
            message += 'семь тысяч ';
            break;

        case '8':
            message += 'восемь тысяч ';
            break;

        case '9':
            message += 'девять тысяч ';
            break;
    }
}

if (numReverse[2]) {
    switch (numReverse[2]) {
        case '1':
            message += 'сто ';
            break;

        case '2':
            message += 'двести ';
            break;

        case '3':
            message += 'триста ';
            break;

        case '4':
            message += 'четыреста ';
            break;

        case '5':
            message += 'пятьсот ';
            break;

        case '6':
            message += 'шестьсот ';
            break;

        case '7':
            message += 'семьсот ';
            break;

        case '8':
            message += 'восемьсот ';
            break;

        case '9':
            message += 'девятьсот ';
            break;
    }
}

if (numReverse[1]) {
    switch (numReverse[1]) {
        case '1':
            switch (numReverse[0]) {
                case '0':
                    message += 'десять';
                    break;

                case '1':
                    message += 'одиннадцать';
                    break;

                case '2':
                    message += 'двенадцать';
                    break;

                case '3':
                    message += 'тринадцать';
                    break;

                case '4':
                    message += 'четырнадцать';
                    break;

                case '5':
                    message += 'пятнадцать';
                    break;

                case '6':
                    message += 'шестнадцать';
                    break;

                case '7':
                    message += 'семнадцать';
                    break;

                case '8':
                    message += 'восемнадцать';
                    break;

                case '9':
                    message += 'девятнадцать';
                    break;
            }
            break;

        case '2':
            message += 'двадцать ';
            break;

        case '3':
            message += 'тридцать ';
            break;

        case '4':
            message += 'сорок ';
            break;

        case '5':
            message += 'пятьдесят ';
            break;

        case '6':
            message += 'шестьдесят ';
            break;

        case '7':
            message += 'семьдесят ';
            break;

        case '8':
            message += 'восемьдесят ';
            break;

        case '9':
            message += 'девяносто ';
            break;
    }
}

if (numReverse[0] && (numReverse[1] !== '1')) {
    switch (numReverse[0]) {
        case '1':
            message += 'один';
            break;

        case '2':
            message += 'два';
            break;

        case '3':
            message += 'три';
            break;

        case '4':
            message += 'четыре';
            break;

        case '5':
            message += 'пять';
            break;

        case '6':
            message += 'шесть';
            break;

        case '7':
            message += 'семь';
            break;

        case '8':
            message += 'восемь';
            break;

        case '9':
            message += 'девять';
            break;
    }
}

console.log('Вы ввели ' + message.trim() + ' евро.');