module.exports = function toReadable(number) {
    if (number <= 0) return 'zero';
    const getStringNumber = function (num) {
        switch (num) {
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
            case 10: return 'ten';
            case 11: return 'eleven';
            case 12: return 'twelve';
            case 13: return 'thirteen';
            case 14: return 'fourteen'
            case 15: return 'fifteen';
            case 16: return 'sixteen'
            case 17: return 'seventeen'
            case 18: return 'eighteen'
            case 19: return 'nineteen'
            case 20: return 'twenty';
            case 30: return 'thirty';
            case 40: return 'forty';
            case 50: return 'fifty';
            case 60: return 'sixty';
            case 70: return 'seventy';
            case 80: return 'eighty';
            case 90: return 'ninety';
            default: return '';
        }
    }
    if (number < 21) return getStringNumber(number);
    if (number > 20 && number < 100) {
        return (getStringNumber(number - number % 10) + ' ' + getStringNumber(number % 10)).trim();
    }
    if (number > 99 && number < 121 || number > 199 && number < 221 || number > 299 && number < 321
        || number > 399 && number < 421 || number > 499 && number < 521 || number > 599 && number < 621
        || number > 699 && number < 721 || number > 799 && number < 821 || number > 899 && number < 921) {
        return (getStringNumber(Math.trunc(number / 100)) + ' hundred ' + getStringNumber(number % 100)).trim();
    }
    else return (getStringNumber(Math.trunc(number / 100)) + ' hundred ' +
        getStringNumber(number % 100 - number % 10) + ' ' + getStringNumber(number % 10)).trim();
}