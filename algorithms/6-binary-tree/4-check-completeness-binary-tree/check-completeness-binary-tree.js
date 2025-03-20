// leetcode: https://leetcode.com/problems/count-complete-tree-nodes/
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
const countNodes = function (root) {
  if (!root) return 0;

  const height = getTreeHeight(root); // T complex O(h)

  if (height === 0) return 1;

  const nodeQtyBase = 2 ** height;
  const upperCount = nodeQtyBase - 1;

  let L = 0,
    R = upperCount;
  // T complex of complete while O(h**2)
  while (L < R) {
    // T complex O(h)
    const mid = Math.ceil((L + R) / 2);
    const isNodeExist = nodeExists(mid, height, root); // T complex O(h)
    if (!isNodeExist) {
      R = mid - 1;
    } else L = mid;
  }

  const baseCount = L + 1;
  return baseCount + upperCount;
};

// T complex: O(h**2) where h is height of the tree and O(h) is O(logn)
// so T complex is O(log**2(n))
// S complex: O(1)

// iterative
const getTreeHeight = (root) => {
  if (!root) return levelCounter;
  let height = 0;

  while (root.left !== null) {
    height++;
    root = root.left;
  }

  return height;
};

// recursive
// const getTreeHeight = (root, levelCounter = 0) => {
//   if (!root) return levelCounter;

//   return getTreeHeight(root.left, levelCounter + 1);
// };

const nodeExists = (indexToFind, height, node) => {
  let L = 0,
    R = 2 ** height - 1,
    count = 0;

  while (count < height) {
    const mid = Math.ceil((L + R) / 2);
    if (indexToFind >= mid) {
      node = node.right;
      L = mid;
    } else {
      node = node.left;
      R = mid - 1;
    }

    count++;
  }

  return node !== null;
};
