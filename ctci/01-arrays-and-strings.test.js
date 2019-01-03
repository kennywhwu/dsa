const {
  allUnique,
  allUniqueSpace,
  checkPermutation,
  checkPermutationSpace,
  URLify,
  palindromePermutation,
  oneAway,
  stringCompression,
  stringCompression2,
  rotateMatrix,
  rotateMatrix2,
  zeroMatrix,
  stringRotation,
  stringRotationSpace,
} = require('./01-arrays-and-strings');

describe('allUnique', function() {
  it('returns_true_if_all_characters_in_string_are_unique', function() {
    expect(allUnique('abcdefghijklmnopqrstuvwxyz')).toBe(true);
    expect(allUnique('aaa')).toBe(false);
    expect(allUnique('hello')).toBe(false);
    expect(allUnique('Aardvark')).toBe(false);
    expect(allUnique('i am the only pub')).toBe(true);
  });
});

describe('allUniqueSpace', function() {
  it('returns_true_if_all_characters_in_string_are_unique', function() {
    expect(allUniqueSpace('abcdefghijklmnopqrstuvwxyz')).toBe(true);
    expect(allUniqueSpace('aaa')).toBe(false);
    expect(allUniqueSpace('hello')).toBe(false);
    expect(allUniqueSpace('Aardvark')).toBe(false);
    expect(allUniqueSpace('i am the only pub')).toBe(true);
  });
});

describe('checkPermutation', function() {
  it('should_return_true_if_two_strings_are_permutations_of_each_other', function() {
    expect(checkPermutation('abcdef', 'dbafce')).toBe(true);
    expect(checkPermutation('aaabbb', 'bababa')).toBe(true);
    expect(checkPermutation('abcdef', 'dgafce')).toBe(false);
    expect(checkPermutation('abcdefg', 'dbafce')).toBe(false);
    expect(checkPermutation('abc', 'abcdef')).toBe(false);
  });
});

describe('checkPermutationSpace', function() {
  it('should_return_true_if_two_strings_are_permutations_of_each_other', function() {
    expect(checkPermutationSpace('abcdef', 'dbafce')).toBe(true);
    expect(checkPermutationSpace('aaabbb', 'bababa')).toBe(true);
    expect(checkPermutationSpace('abcdef', 'dgafce')).toBe(false);
    expect(checkPermutationSpace('abcdefg', 'dbafce')).toBe(false);
    expect(checkPermutationSpace('abc', 'abcdef')).toBe(false);
  });
});

describe('URLify', function() {
  it('should_return_passed-in_string_with_spaces_replaced_with_%20', function() {
    expect(URLify('hello there')).toBe('hello%20there');
    expect(URLify('hello')).toBe('hello');
    expect(URLify('')).toBe('');
    expect(URLify(' ')).toBe('%20');
    expect(URLify('give me some space')).toBe('give%20me%20some%20space');
  });
});

describe('palindromePermutation', function() {
  it('should_return_true_if_string_is_permutation_of_palindrome', function() {
    expect(palindromePermutation('tact coa')).toBe(true);
    expect(palindromePermutation('aaa bbb')).toBe(false);
    expect(palindromePermutation('abababa')).toBe(true);
  });
});

describe('oneAway', function() {
  it('should_return_true_if_two_strings_are_one_insertion_deletion_or_change_away', function() {
    expect(oneAway('pale', 'pale')).toBe(true);
    expect(oneAway('ple', 'pale')).toBe(true);
    expect(oneAway('pale', 'ple')).toBe(true);
    expect(oneAway('pale', 'bale')).toBe(true);
    expect(oneAway('pale', 'bake')).toBe(false);
    expect(oneAway('pale', 'palaa')).toBe(false);
  });
});

describe('stringCompression', function() {
  it('should_return_string_comprising_of_number_of_character_instances_of_passed-in_string', function() {
    expect(stringCompression('aabcccccaaa')).toBe('a2b1c5a3');
    expect(stringCompression('abc')).toBe('abc');
    expect(stringCompression('')).toBe('');
    expect(stringCompression('aabbcc')).toBe('aabbcc');
    expect(stringCompression('aaabbbccc')).toBe('a3b3c3');
  });
});

describe('stringCompression2', function() {
  it('should_return_string_comprising_of_number_of_character_instances_of_passed-in_string', function() {
    expect(stringCompression2('aabcccccaaa')).toBe('a2b1c5a3');
    expect(stringCompression2('abc')).toBe('abc');
    expect(stringCompression2('')).toBe('');
    expect(stringCompression2('aabbcc')).toBe('aabbcc');
    expect(stringCompression2('aaabbbccc')).toBe('a3b3c3');
  });
});

describe('rotateMatrix', function() {
  it('should_return_nxn_matrix_rotated_90_degrees', function() {
    expect(rotateMatrix([[0]])).toEqual([[0]]);
    expect(rotateMatrix([[0, 0], [1, 1]])).toEqual([[1, 0], [1, 0]]);
    expect(rotateMatrix([[0, 0, 0], [1, 1, 1], [2, 2, 2]])).toEqual([
      [2, 1, 0],
      [2, 1, 0],
      [2, 1, 0],
    ]);
    expect(
      rotateMatrix([
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
      ])
    ).toEqual([[12, 8, 4, 0], [13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3]]);
  });
});

describe('rotateMatrix2', function() {
  it('should_return_nxn_matrix_rotated_90_degrees', function() {
    expect(rotateMatrix2([[0]])).toEqual([[0]]);
    expect(rotateMatrix2([[0, 0], [1, 1]])).toEqual([[1, 0], [1, 0]]);
    expect(rotateMatrix2([[0, 0, 0], [1, 1, 1], [2, 2, 2]])).toEqual([
      [2, 1, 0],
      [2, 1, 0],
      [2, 1, 0],
    ]);
    expect(
      rotateMatrix2([
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
      ])
    ).toEqual([[12, 8, 4, 0], [13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3]]);
  });
});

describe('zeroMatrix', function() {
  it('should_return_matrix_with_zeroed_out_rows_and_columns', function() {
    expect(zeroMatrix([[0]])).toEqual([[0]]);
    expect(zeroMatrix([[1, 1, 1], [1, 0, 1], [1, 1, 1]])).toEqual([
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ]);
    expect(zeroMatrix([[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 0]])).toEqual([
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ]);
  });
});

describe('stringRotation', function() {
  it('should_return_true_if_strings_are_rotated', function() {
    expect(stringRotation('waterbottle', 'erbottlewat')).toBe(true);
    expect(stringRotation('waterbottle', 'waterbottle')).toBe(true);
    expect(stringRotation('waterbottle', 'waterbottl')).toBe(false);
    expect(stringRotation('waterbottle', 'waterbottlew')).toBe(false);
  });
});

describe('stringRotationSpace', function() {
  it('should_return_true_if_strings_are_rotated', function() {
    expect(stringRotationSpace('waterbottle', 'erbottlewat')).toBe(true);
    expect(stringRotationSpace('waterbottle', 'waterbottle')).toBe(true);
    expect(stringRotationSpace('waterbottle', 'waterbottl')).toBe(false);
    expect(stringRotationSpace('waterbottle', 'waterbottlew')).toBe(false);
  });
});
