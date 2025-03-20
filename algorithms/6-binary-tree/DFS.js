const DFS = (node, counter = 0) => {
  if (node === null) {
    return counter;
  }

  return Math.max(DFS(node.left, counter + 1), DFS(node.right, counter + 1));
};

// DFS with stack
function dfsPreOrderIterative(root) {
  if (!root) return [];

  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.value);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);

    return result;
  }
}

console.log(dfsPreOrderIterative(root)); // [1, 2, 3]

// DFS Preorder with recursion
function dfsPreOrder(root) {
  if (!root) return [];

  return [root.value, ...dfsPreOrder(root.left), ...dfsPreOrder(root.right)]; // [1, 2, 3]
}

// DFS Inorder (Left → Root → Right)
function dfsInOrder(root) {
  if (!root) return [];

  return [...dfsInOrder(root.left), root.value, ...dfsInOrder(root.right)]; // [2, 1, 3]
}

// DFS Postorder (Left → Right → Root)
function dfsPostOrder(root) {
  if (!root) return [];

  return [...dfsPostOrder(root.left), ...dfsPostOrder(root.right), root.value]; // [2, 3, 1]
}
