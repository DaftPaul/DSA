const DFS = (node, counter = 0) => {
  if (node === null) {
    return counter;
  }

  return Math.max(DFS(node.left, counter + 1), DFS(node.right, counter + 1));
};
