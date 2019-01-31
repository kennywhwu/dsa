const balancedBrackets = require('./balanced-brackets');

describe('balanced strings', function() {
  it('returns true when brackets/parens are balanced', function() {
    expect(balancedBrackets('hello')).toBe(true);
    expect(balancedBrackets('(hi) [there]')).toBe(true);
    expect(balancedBrackets('(hi [there])')).toBe(true);
    expect(balancedBrackets('(((hi)))')).toBe(true);
  });

  it('returns false when bracket is left open at the end', function() {
    expect(balancedBrackets('(hello')).toBe(false);
  });
  it('returns false when wrong type is closed', function() {
    expect(balancedBrackets('(nope]')).toBe(false);
  });
  it('returns false when bracket is closed out of order', function() {
    expect(balancedBrackets('((ok) [nope)]')).toBe(false);
  });
});
