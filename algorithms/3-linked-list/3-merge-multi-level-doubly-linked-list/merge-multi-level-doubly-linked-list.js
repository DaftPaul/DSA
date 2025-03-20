/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function (head) {
  if (!head) return head;
  let currentNode = head;

  while (currentNode !== null) {
    if (currentNode.child === null) {
      currentNode = currentNode.next;
    } else {
      let childTailNode = currentNode.child;

      while (childTailNode.next !== null) {
        childTailNode = childTailNode.next;
      }

      childTailNode.next = currentNode.next;
      if (childTailNode.next !== null) {
        childTailNode.next.prev = childTailNode;
      }

      currentNode.next = currentNode.child;
      currentNode.child.prev = currentNode;
      currentNode.child = null;
    }
  }

  return head;
};

// time complex O(n);
// time complex O(1);
