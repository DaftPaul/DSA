// leetcode: https://leetcode.com/problems/binary-tree-right-side-view/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * BFS APPROACH
 */
var rightSideView = function (root) {
  if (!root) return [];

  const result = [],
    queue = [root];

  while (queue.length) {
    const length = queue.length;
    let counter = 0;

    while (counter < length) {
      const currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      counter++;
      if (counter === length) result.push(currentNode.val);
    }
  }

  return result;
};

// T complex: O(n);
// S complex: O(n) which n is the widest part of the tree;
