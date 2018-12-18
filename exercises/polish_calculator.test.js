const calc = require('./polish-calculator');

describe('polish calculator', function() {
  it('returns total calculation based on string', function() {
    expect(calc('+ 1 2')).toBe(3);
    expect(calc('* 2 + 1 2')).toBe(6);
    expect(calc('+ 9 * 2 3')).toBe(15);
    expect(calc('- 1 2')).toBe(-1);
    expect(calc('- 9 * 2 3')).toBe(3);
    expect(calc('/ 6 - 4 2')).toBe(3);
  });
});
