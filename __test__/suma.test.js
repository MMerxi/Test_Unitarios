// TEST

const sum = require('../utils/suma');

text('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})

test ('add -1' + '-3 to equal -4', () => {
    expect(sum(-1,-3)).toBe(-4)
}) //Falta código