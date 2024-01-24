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

var rotateRight = function (head, k) {
  let len = 0,
    dummy = head,
    temp;

  while (dummy) {
    //calculating length of list
    len++;
    dummy = dummy.next;
  }

  if (len < 2)
    //if length is 0 or 1 then no amount shifts would change the order
    return head;

  k = k % len; //important since k can range to 2*10 to power 9 while max len of linked lists is 500

  if (!k)
    //if shifts are 0 then return the original list
    return head;

  dummy = head; // saving head to point to when we reach the end of the linked list

  k++; //incrementing  k so we reach on a place before where head needs to be placed

  while (len - k++)
    //IMPORTANT TO NOTE : IF K SHIFT OCCUR , N-K BECOMES NEW HEAD.
    head = head.next;

  [head.next, head] = [null, head.next]; // assgining the heads next node as null while simultaneously moving head to next

  //If unfamiliar with destructuring or simultaneous assigning used above , use this instead :
  /**
  temp = head.next;
  head.next = null;
  head = temp;
  */

  temp = head; //assigning temp to head to traverse till end

  while (temp.next)
    //looping till we reach the end
    temp = temp.next;

  temp.next = dummy; //pointing the end back to the start

  return head;
};
