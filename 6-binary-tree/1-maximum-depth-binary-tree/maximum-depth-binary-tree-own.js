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
 * @return {number}
 */
var maxDepth = function (root) {
  return DFS(root);
};

const DFS = (node, counter = 0) => {
  if (node === null) {
    return counter;
  }

  return Math.max(DFS(node.left, counter + 1), DFS(node.right, counter + 1));
};

// T complex: O(n)
// S complex: O(n)
