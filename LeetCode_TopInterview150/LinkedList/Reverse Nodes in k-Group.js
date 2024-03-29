/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = (head, k) => {
  if (k <= 1 || head === null) return head;

  let prev = null;
  let current = head;

  while (current) {
    // last node of the intial non-reversing part of the linked list
    const nonReversingLastNode = prev;
    // going to be the last node of the sub-list post reversal
    const reversedSubListLastNode = current;
    let idx = 1;

    while (idx <= k && current) {
      // reverse the links for next k items
      const next = current.next;
      current.next = prev;

      prev = current;
      current = next;
      idx += 1;
    }

    // re-link the reversed part properly with the non-reversed parts
    if (nonReversingLastNode !== null) {
      nonReversingLastNode.next = prev;
    } else {
      head = prev;
    }
    reversedSubListLastNode.next = current;

    // check whether another group of k elements exists,
    // only then we execute the next iteration of reversal
    if (!hasKMoreElements(current, k)) break;

    // reset the previous pointer to be the last element of the reversed part
    prev = reversedSubListLastNode;
  }

  return head;
};

function hasKMoreElements(list, k) {
  let len = 0;
  while (list && len < k) {
    list = list.next;
    len += 1;
  }
  return len === k;
}
