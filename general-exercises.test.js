const {
  convertZigzag,
  generateParenthesis,
  longestValidParentheses,
  reverseWords,
  isPrime,
} = require('./general-exercises');

describe('convertZigzag', function() {
  it('returns_string_in_order_of_zigzag_pattern', function() {
    expect(convertZigzag('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
    expect(convertZigzag('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
    expect(convertZigzag('PAYPALISHIRING', 5)).toBe('PHASIYIRPLIGAN');
  });
});

describe('generateParenthesis', function() {
  it('returns_array_of_all_combinations_of_valid_parentheses_of_passed-in_nunber_of_pairs', function() {
    expect(generateParenthesis(3).sort()).toEqual(
      ['((()))', '(())()', '()(())', '()()()', '(()())'].sort()
    );
  });
});

describe('longestValidParentheses', function() {
  it('returns_longest_string_of_valid_parens', function() {
    expect(longestValidParentheses('(()')).toEqual(2);
    expect(longestValidParentheses(')()())')).toEqual(4);
    expect(longestValidParentheses('(())())')).toEqual(6);
  });
});

describe('reverseWords', function() {
  it('returns_string_with_words_reversed', function() {
    expect(reverseWords('the sky is blue')).toEqual('blue is sky the');
    expect(reverseWords(' ')).toEqual('');
    expect(reverseWords('  ')).toEqual('');
  });
});

describe('isPrime', function() {
  it('returns_true_if_number_is_prime', function() {
    expect(isPrime(2)).toEqual(true);
    expect(isPrime(3)).toEqual(true);
    expect(isPrime(5)).toEqual(true);
    expect(isPrime(10)).toEqual(false);
    expect(isPrime(20)).toEqual(false);
    expect(isPrime(25)).toEqual(false);
    expect(isPrime(101)).toEqual(true);
  });
});
