const { sortLinkedLists, SinglyLinkedList } = require('./sort-linked-lists');

describe('sort linked lists', function() {
  it('returns new sorted list merged from two sorted linked lists', function() {
    let list1 = new SinglyLinkedList();
    list1
      .push(1)
      .push(5)
      .push(8)
      .push(9);

    let list2 = new SinglyLinkedList();
    list2
      .push(2)
      .push(7)
      .push(10);

    let sortedList = new SinglyLinkedList();
    sortedList
      .push(1)
      .push(2)
      .push(5)
      .push(7)
      .push(8)
      .push(9)
      .push(10);
    expect(sortLinkedLists(list1, list2)).toEqual(sortedList);
  });
});
