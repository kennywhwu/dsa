const { findSurvivor, SinglyLinkedList } = require('./josephus-survivor');

describe('find survivor', function() {
  it('returns the number survivor after cycling through skipped people', function() {
    expect(findSurvivor(10, 3)).toBe(4);
    expect(findSurvivor(5, 2)).toBe(3);
    expect(findSurvivor(15, 27)).toBe(13);
  });
});
