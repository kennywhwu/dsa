const { makeBoard, find } = require('./boggle');

describe('find', function() {
  it('returns true if word can be found from joining adjacent letters only once in board', function() {
    const board = makeBoard(`N C A N E
                         O U I O P
                         Z Q Z O N
                         F A D P L
                         E D E A Z`);

    expect(board).toEqual([
      ['N', 'C', 'A', 'N', 'E'],
      ['O', 'U', 'I', 'O', 'P'],
      ['Z', 'Q', 'Z', 'O', 'N'],
      ['F', 'A', 'D', 'P', 'L'],
      ['E', 'D', 'E', 'A', 'Z'],
    ]);
    expect(find(board, 'NOON')).toBe(true);
    expect(find(board, 'NOPE')).toBe(true);
    expect(find(board, 'CANON')).toBe(false);
    expect(find(board, 'QUINE')).toBe(false);
    expect(find(board, 'FADED')).toBe(true);

    const board2 = makeBoard(`E D O S Z
                          N S O N R
                          O U O O P
                          Z Q Z O R
                          F A D P L`);
    expect(find(board2, 'NOOOOS')).toBe(true);
  });
});
