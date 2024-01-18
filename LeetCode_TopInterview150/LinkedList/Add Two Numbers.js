/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (a, b) => {
  let head = new ListNode();
  let tail = head;
  let carry = 0;
  while (a || b || carry) {
    if (a) {
      carry += a.val;
      a = a.next;
    }
    if (b) {
      carry += b.val;
      b = b.next;
    }
    let digit = carry % 10;
    carry = (carry / 10) | 0;
    tail = tail.next = new ListNode(digit);
  }
  return head.next;
};
