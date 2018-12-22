const { convertZigzag } = require('./general-exercises');

describe('convertZigzag', function() {
  it('returns_string_in_order_of_zigzag_pattern', function() {
    expect(convertZigzag('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
    expect(convertZigzag('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
    expect(convertZigzag('PAYPALISHIRING', 5)).toBe('PHASIYIRPLIGAN');
  });
});
