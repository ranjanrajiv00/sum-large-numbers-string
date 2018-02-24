
function add(number1, number2, accumulator = '', carry = 0) {
    if (!(number1.length || number1.length || carry))
        return accumulator.replace(/^0+/, '');

    carry = ~~carry + (~~number1.pop() + ~~number2.pop());
    accumulator = carry % 10 + accumulator;
    carry = carry > 9;

    return add(number1, number2, accumulator, carry);
}

function sumLargeNumbers(number1, number2) {
    if (number1 === '0' && number2 === '0') 
        return '0';
    return add(number1.split(''), number2.split(''));
}

module.exports.sumLargeNumbers = sumLargeNumbers;
