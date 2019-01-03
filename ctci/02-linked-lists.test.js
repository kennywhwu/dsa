const {
  Node,
  SinglyLinkedList,
  removeDuplicates,
} = require('./02-linked-lists');

describe('removeDuplicates', function() {
  it('should_return_linked_list_with_duplicated_removed', function() {
    let list = new SinglyLinkedList()
      .push('a')
      .push('b')
      .push('c')
      .push('d')
      .push('b')
      .push('e');
    let dedupedList = new SinglyLinkedList()
      .push('a')
      .push('b')
      .push('c')
      .push('d')
      .push('e');
    expect(removeDuplicates(list)).toEqual(dedupedList);
  });
});
