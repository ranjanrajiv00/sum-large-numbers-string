const { sumLargeNumbers } = require('./sumLargeNumbers');

console.log(sumLargeNumbers('1', '2')); // => '3'
console.log(sumLargeNumbers('800', '9567')); // => '10367'
console.log(sumLargeNumbers('99', '1')); // => '100'
console.log(sumLargeNumbers('00103', '08567')); // => '8670'
console.log(sumLargeNumbers('50095301248058391139327916261', '81055900096023504197206408605')); // => '131151201344081895336534324866'
