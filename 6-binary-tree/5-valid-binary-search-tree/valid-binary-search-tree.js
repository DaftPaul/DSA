// leetcode: https://leetcode.com/problems/validate-binary-search-tree/
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
 * @return {boolean}
 * DFS Approach is the best with Pre order traversal
 */
const isValidBST = function (root) {
  if (!root) return true;

  return DFS(root);
};

const DFS = (node, min = -Infinity, max = Infinity) => {
  if (node.val <= min || node.val >= max) {
    return false;
  }

  if (node.left) {
    if (!DFS(node.left, min, node.val)) {
      return false;
    }
  }

  if (node.right) {
    if (!DFS(node.right, node.val, max)) {
      return false;
    }
  }

  return true;
};

// T: O(N)
// S: O(N)
