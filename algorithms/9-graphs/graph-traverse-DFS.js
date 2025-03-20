/**
 * @param {number[][]} graph
 * @return {number}
 * Graph traversing by DFS
 */
var graphTraversalDFS = function (graph) {
  const values = [];
  traversalDFS(graph, values);

  return values;
};

const traversalDFS = (graph, values = [], vertex = 0, seen = new Map()) => {
  values.push(vertex);
  seen.set(vertex, true);
  const connections = graph[vertex];

  for (let i = 0; i < connections.length; i++) {
    const nextVertex = connections[i];
    if (!seen.has(nextVertex)) {
      traversalDFS(graph, values, nextVertex, seen);
    }
  }
};

console.log(
  graphTraversalDFS([
    [1, 3],
    [0],
    [3, 8],
    [0, 4, 5, 2],
    [3, 6],
    [3],
    [4, 7],
    [6],
    [2],
  ])
); // Array(9) [ 0, 1, 3, 4, 6, 7, 5, 2, 8 ]
