import { LinkList, convertLinkedListToArray } from "../linked-list.js";

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
var reverseBetween = function (head, left, right) {
  let currentPos = 1,
    currentNode = head,
    startNode = head;
  while (currentPos < left) {
    startNode = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }

  let previousNode = null,
    tailNode = currentNode;
  while (currentPos >= left && currentPos <= right) {
    const nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
    currentPos++;
  }

  startNode.next = previousNode;
  tailNode.next = currentNode;

  return left > 1 ? head : previousNode;
};

// time complex: O(n)
// space complex: O(1)

console.log(
  convertLinkedListToArray(
    reverseBetween(new LinkList([1, 2, 3, 4, 5]).head, 1, 4)
  )
); // [4, 3, 2, 1, 5];
