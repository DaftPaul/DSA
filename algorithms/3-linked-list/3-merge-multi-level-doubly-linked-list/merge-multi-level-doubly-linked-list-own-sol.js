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

  while (currentNode) {

    if (currentNode.child) {
      let nextNode = currentNode.next;
      let childTailNode = currentNode.child;

      while (childTailNode.next !== null) {
        childTailNode = childTailNode.next;
      }

      if (nextNode) {
        childTailNode.next = nextNode;
        nextNode.prev = childTailNode;
      }

      currentNode.child.prev = currentNode;
      currentNode.next = currentNode.child;
      currentNode.child = null;
    }
    currentNode = currentNode.next;
  }

  return head;
};

// time complex O(n);
// time complex O(1);
