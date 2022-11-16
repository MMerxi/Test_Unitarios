// TEST
 
const isUpperCase = require('../utils/esmayuscula');
describe('reverse', () => {
    test.each`
      split|          | join    
      ${Ana}          | ${ANA}
      ${Merxi}        | ${MERXI}
      ${Javi}         | ${JAVI}
      ${Mari}         | ${MARI}
      

    `('$split + $reverse should return $join', ({split, reverse, join}) => {
      expect(isUpperCase(split)).reverse(join);
    });
  });