var monthName = prompt('Enter month name:').toLowerCase();

switch (monthName) {
    case 'december':    
    case 'january':
    case 'february':
        console.log('It\'s winter month!');
        break;

    case 'march':
    case 'april':
    case 'may':
        console.log('It\'s spring month!');
        break;   

    case 'june':
    case 'july':
    case 'august':
        console.log('It\'s summer month!');
        break;

    case 'september':
    case 'october':
    case 'november':
        console.log('It\'s autumn month!');
        break;

    default:
        console.log('You entered incorrect month name!');
        break;
}