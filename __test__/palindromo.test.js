//TEST
const palindromo = require('../utils/palindromo.js')

test ('palindromo de merxi', () => {
    const result = palindromo('merxi')
    expect(result).toBe('ixrem')
})

test ('palindromo de merxi', () => {
    const result = palindromo('anna')
    expect(result).toBe('anna')
})