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
 * DFS APPROACH
 */
var rightSideView = function (root) {
  const result = [];
  DFS(root, result);

  return result;
};

const DFS = (node, result, currentLevel = 0) => {
  if (!node) return;
  if (currentLevel >= result.length) {
    result.push(node.val);
  }

  if (node.right) {
    DFS(node.right, result, currentLevel + 1);
  }
  if (node.left) {
    DFS(node.left, result, currentLevel + 1);
  }
};

// T complex: O(n);
// S complex: O(n) which n is the height of the tree;
