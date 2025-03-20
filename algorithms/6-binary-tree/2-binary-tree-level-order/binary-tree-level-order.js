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
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root) return [];

  const res = [], // S complex O(n)
    queue = [root]; // S complex O(n/2) => O(n)

  while (queue.length) {
    let length = queue.length,
      count = 0;
    const currentLevelValues = [];

    while (count < length) {
      const currentNode = queue.shift();
      currentLevelValues.push(currentNode.val);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      count++;
    }

    res.push(currentLevelValues);
  }

  return res;
};

// T complex O(n)
// S complex O(n)