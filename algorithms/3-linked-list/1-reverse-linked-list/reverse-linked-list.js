/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

import { convertLinkedListToArray, LinkList } from "../linked-list.js";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let currentNode = head;
    let nextNode = null;
    let previousNode = null;
    while (currentNode) {
      nextNode = currentNode.next
      currentNode.next = previousNode;
      previousNode = currentNode
      currentNode = nextNode
    }
    return previousNode;
};

console.log(convertLinkedListToArray(reverseList(new LinkList([1, 2, 3, 4, 5]).head))) // [5, 4, 3, 2, 1]

// time: O(n)
// space: O(1)