/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = (head, left, right) => {
  // Tip: let [start, curr] = [head, head] 형식으로는 curr에 ListNode가 적용되지 않는다..!
  let start = head,
    curr = head;
  let index = 1;
  while (index < left) {
    start = curr;
    curr = curr.next;
    index += 1;
  }

  let prev = null,
    tail = curr;
  while (index <= right) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    index += 1;
  }

  start.next = prev;
  tail.next = curr;
  return left === 1 ? prev : head;
};
