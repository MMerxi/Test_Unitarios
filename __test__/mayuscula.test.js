// FUNCION A PROBAR

const isUpperCse =require('..utils/esmayuscula');

text('The string HELLO should return true', () => {
    const result = isUpperCase('HELLO');
    expect(result).toBe(true);
})

test('The string hello should return true', () => {
    const result = isUpperCase('hello');
    expect(result).toBe(false0);
})


module.exports = isUpperCase;