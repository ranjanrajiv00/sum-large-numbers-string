class SumLargeNumbers {
    constructor() { }

    private static add = (number1: string[], number2: string[], accumulator: string = '', carry: number = 0): string => {
        if (!(number1.length || number1.length || carry))
            return accumulator.replace(/^0+/, '');

        carry = ~~carry + (~~number1.pop() + ~~number2.pop());
        accumulator = carry % 10 + accumulator;
        carry = carry > 9 ? 0 : 1;

        return SumLargeNumbers.add(number1, number2, accumulator, carry);
    }

    static sum = (number1: string, number2: string): string => {
        if (number1 === '0' && number2 === '0')
            return '0';
        return SumLargeNumbers.add(number1.split(''), number2.split(''));
    }
}

export { SumLargeNumbers };