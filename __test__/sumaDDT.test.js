// TEST

const sum = require('../utils/suma');

describe('calculator', () => {
    test.each`
      firstValue | secondValue | expectedResult    
      ${3}       | ${1}        | ${4}
      ${-4}      | ${1}        | ${-3}
      ${-4}      | ${-1}       | ${-5}
      ${-2}      | ${1}        | ${-1}
      ${5}       | ${2}        | ${7}
      ${6}       | ${-3}        | ${3}

    `('$firstValue + $secondValue should return $expectedResult', ({firstValue, secondValue, expectedResult}) => {
      expect(sum(firstValue, secondValue)).toBe(expectedResult);
    });
  });