const {
  revString,
  product,
  everyOther2,
  longest,
  isPalindrome,
  findIndex,
  gatherStrings,
  binarySearch,
  realSize,
  sumSquares,
  replicate,
  balancedBrackets,
  dump,
  validate,
  simplify,
  add,
} = require('./recursion-exercises');

describe('revString', function() {
  it('returns reverse of string passed in', function() {
    expect(revString('')).toBe('');
    expect(revString('a')).toBe('a');
    expect(revString('hello')).toBe('olleh');
    expect(revString('(hi) [there]')).toBe(']ereht[ )ih(');
    expect(revString('rithmschool')).toBe('loohcsmhtir');
    expect(revString('porcupine')).toBe('enipucrop');
  });
});

describe('product', function() {
  it('returns running product for list of numbers', function() {
    expect(product([])).toBe(0);
    expect(product([1])).toBe(1);
    expect(product([2, 3, 4])).toBe(24);
    expect(product([10, 4, 2, 7, 19])).toBe(10640);
  });
});

describe('everyOther2', function() {
  it('returns string of every other character of passed-in string', function() {
    expect(everyOther2('')).toBe('');
    expect(everyOther2('a')).toBe('a');
    expect(everyOther2('hello')).toBe('hlo');
    expect(everyOther2('rithmschool')).toBe('rtmcol');
    expect(everyOther2('(hi) [there]')).toBe('(i tee');
  });
});

describe('longest', function() {
  it('returns string of every other character of passed-in string', function() {
    expect(longest([])).toBe(0);
    expect(longest([''])).toBe(0);
    expect(longest(['hello'])).toBe(5);
    expect(longest(['hello', 'hi', 'hola', 'greetings'])).toBe(9);
    expect(longest(['hello', 'hi', 'kenny'])).toBe(5);
    expect(
      longest(['garbage', 'boo', 'yas', 'supercalifragilisticexpialidocious'])
    ).toBe(34);
  });
});

describe('isPalindrome', function() {
  it('returns true if passed-in string is palindrome, false if now', function() {
    expect(isPalindrome('')).toBe(true);
    expect(isPalindrome('a')).toBe(true);
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('too hot to hoot')).toBe(false);
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('tacocat')).toBe(true);
  });
});

describe('findIndex', function() {
  it('returns index of element of passed-in array that equals the passed-in string', function() {
    expect(findIndex([], '')).toBe(false);
    expect(findIndex([], 'a')).toBe(false);
    expect(findIndex(['a'], 'a')).toBe(true);
    expect(findIndex(['a', 'b', 'c'], 'b')).toBe(true);
    expect(findIndex(['a', 'b', 'c'], 'd')).toBe(false);
    expect(findIndex(['hello', 'rithmschool', 'tacocat'], 'bye')).toBe(false);
    expect(findIndex(['hello', 'rithmschool', 'tacocat'], 'tacocat')).toBe(
      true
    );
    expect(findIndex(['hello', 'rithmschool', 'tacocat'], '')).toBe(false);
  });
});

describe('gatherStrings', function() {
  it('returns array of all values in object that are strings', function() {
    let nestedObj = {
      firstName: 'Lester',
      favoriteNumber: 22,
      moreData: {
        lastName: 'Testowitz',
      },
      funFacts: {
        moreStuff: {
          anotherNumber: 100,
        },
        favoriteString: 'nice!',
      },
    };

    expect(gatherStrings({})).toEqual([]);
    expect(gatherStrings(nestedObj)).toEqual(['Lester', 'Testowitz', 'nice!']);
    expect(gatherStrings({ key: [] })).toEqual([]);
    expect(gatherStrings({ key: 'hello' })).toEqual(['hello']);
  });
});

describe('binarySearch', function() {
  it('returns index of element of passed-in array that equals the passed-in number, or -1 if not found', function() {
    expect(binarySearch([])).toBe(-1);
    expect(binarySearch([], 1)).toBe(-1);
    expect(binarySearch([1, 2, 3, 4], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 4], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4], 5)).toBe(-1);
    expect(binarySearch([1, 4, 8, 10, 14, 17, 20, 25, 30], 25)).toBe(7);
    expect(binarySearch([1, 4, 8, 10, 14, 17, 20, 25, 30], 26)).toBe(-1);
  });
});

describe('realSize', function() {
  it('returns count of numbers in nested arrays', function() {
    expect(realSize([])).toBe(0);
    expect(realSize([1])).toBe(1);
    expect(realSize([[]])).toBe(0);
    expect(realSize([1, [1]])).toBe(2);
    expect(realSize([1, [], 2, [], 3, []])).toBe(3);
    expect(realSize([0, [1, [5, [4, 3], 1], 1]])).toBe(7);
    expect(realSize([[[5], 3], 0, 2, [], [4, [5, 6]]])).toBe(7);
  });
});

describe('sumSquares', function() {
  it('returns sum of squares of numbers in nested array', function() {
    expect(sumSquares([])).toBe(0);
    expect(sumSquares([1])).toBe(1);
    expect(sumSquares([[]])).toBe(0);
    expect(sumSquares([1, 2, 3])).toBe(14);
    expect(sumSquares([[1, 2], 3])).toBe(14);
    expect(sumSquares([[[[[[[[[1]]]]]]]]])).toBe(1);
    expect(sumSquares([10, [[10], 10], [10]])).toBe(400);
    expect(sumSquares([1, [[3], 10, 5, [2, [3], [4], [5, [6]]]], [10]])).toBe(
      325
    );
  });
});

describe('replicate', function() {
  it('returns array of numbers listed passed-in number of times', function() {
    expect(replicate(0, 0)).toEqual([]);
    expect(replicate(5, 1)).toEqual([1, 1, 1, 1, 1]);
    expect(replicate(0, 12)).toEqual([]);
    expect(replicate(-1, 12)).toEqual([]);
    expect(replicate(8, 0)).toEqual([0, 0, 0, 0, 0, 0, 0, 0]);
  });
});

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

describe('dump', function() {
  it('returns space-separated string of all squares in order', function() {
    expect(dump(0)).toEqual('0');
    expect(dump(1)).toEqual('1');
    expect(dump([0, 1, 0, 1])).toEqual('0 1 0 1');
    expect(dump([0, 0, 0, [1, 1, 1, 1]])).toEqual('0 0 0 1 1 1 1');
    expect(dump([0, 0, 0, [1, 1, 1, [0, 0, 0, [1, 1, 1, 1]]]])).toEqual(
      '0 0 0 1 1 1 0 0 0 1 1 1 1'
    );
  });
});

describe('validate', function() {
  it('returns true if valid square is passed in', function() {
    expect(validate(0)).toEqual(true);
    expect(validate(1)).toEqual(true);
    expect(validate(2)).toEqual(false);
    expect(validate([1, 1, 1, 1])).toEqual(true);
    expect(validate([1, 0, [1, [0, 0, 0, 0], 1, [1, 1, 1, 1]], 1])).toEqual(
      true
    );
    expect(
      validate([1, [1, 0, 1, [0, [0, 0, 0, 0], 1, 1]], [1, 0, 1, 0], 1])
    ).toEqual(true);
    expect(validate([1, 1, 1, 1, 1])).toEqual(false);
    expect(validate([1, 0, [1, [0, 0, 0, 0, 1], 1, [1, 1, 1, 1]], 1])).toEqual(
      false
    );
    expect(
      validate([1, [1, 0, 1, [0, [0, 0, 0], 1, 1]], [1, 0, 1, 0], 1])
    ).toEqual(false);
  });
});

describe('simplify', function() {
  it('returns maximally simplifed square', function() {
    expect(simplify(0)).toEqual(0);
    expect(simplify(1)).toEqual(1);
    expect(simplify([1, 1, 1, 1])).toEqual(1);
    expect(simplify([0, 0, 0, 0])).toEqual(0);
    expect(simplify([1, 0, 1, 0])).toEqual([1, 0, 1, 0]);
    expect(simplify([1, 0, 1, [1, 1, 1, 1]])).toEqual([1, 0, 1, 1]);
    expect(simplify([1, 1, 1, [1, 1, 1, 1]])).toEqual(1);
    expect(simplify([[1, 1, 1, 1], [1, 1, 1, 1], 1, 1])).toEqual(1);
    expect(simplify([1, 0, [1, [0, 0, 0, 0], 1, [1, 1, 1, 1]], 1])).toEqual([
      1,
      0,
      [1, 0, 1, 1],
      1,
    ]);
  });
});

describe('add', function() {
  it('returns added result of two passed-in squares', function() {
    expect(add(0, 1)).toEqual(1);
    expect(add(0, [1, 0, 1, 0])).toEqual([1, 0, 1, 0]);
    expect(add([0, 0, 0, 1], [0, 1, 0, 1])).toEqual([0, 1, 0, 1]);
    expect(
      add(
        [0, [1, 1, 1, [0, 0, 0, 0]], [0, 0, 0, 0], 1],
        [1, [1, 0, 1, [0, 0, 1, 1]], [1, 0, 1, 0], 1]
      )
    ).toEqual([1, [1, 1, 1, [0, 0, 1, 1]], [1, 0, 1, 0], 1]);
    expect(
      add(
        [0, [1, 1, 1, 0], [0, 0, 0, 0], 1],
        [1, [1, 0, 1, [0, 0, 1, 1]], [1, 0, 1, 0], 1]
      )
    ).toEqual([1, [1, 1, 1, [0, 0, 1, 1]], [1, 0, 1, 0], 1]);
    expect(
      add(
        [0, [1, 1, 1, 1], [0, 0, 0, 0], 1],
        [1, [1, 0, 1, [0, [0, 0, 0, 0], 1, 1]], [1, 0, 1, 0], 1]
      )
    ).toEqual([1, [1, 1, 1, [1, [1, 1, 1, 1], 1, 1]], [1, 0, 1, 0], 1]);
  });
});
