// leetcode: https://leetcode.com/problems/invert-binary-tree/
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
 * @return {TreeNode}
 * BFS approach
 */
var invertTree = function(root) {
  if (!root) return null;

  const queue = [root];
  while (queue.length) {
      const node = queue.shift();
      const tmpLeft = node.left;
      node.left = node.right;
      node.right = tmpLeft;
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
  }

  return root
};