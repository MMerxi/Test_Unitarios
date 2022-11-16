// TEST
 
const palindromo = require('../utils/palindromo');
describe('reverse', () => {
    test.each`
      split|          | join    
      ${ana}          | ${anA}
      ${merxi}        | ${ixreM}
      ${javi}         | ${ivaJ}
      ${mari}         | ${iraM}
      

    `('$split + $reverse should return $join', ({split, reverse, join}) => {
      expect(resultString(split)).reverse(join);
    });
  });