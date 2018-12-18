const reverseString = require('./string-reversal');

describe('reversed strings', function() {
  it('returns reverse of string passed in', function() {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('(hi) [there]')).toBe(']ereht[ )ih(');
    expect(reverseString('rithmschool')).toBe('loohcsmhtir');
  });
});
