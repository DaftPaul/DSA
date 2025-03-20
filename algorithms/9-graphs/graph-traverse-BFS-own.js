/**
 * @param {number[][]} graph
 * @return {number}
 * Graph traversing by BFS
 */
var graphTraverseBFS = function (graph) {
  console.time("graphTraverseBFS");
  const queue = [0];
  const values = [];
  const seen = new Map();

  while (queue.length) {
    const vertex = queue.shift();
    values.push(vertex);
    seen.set(vertex, true);
    const connections = graph[vertex];

    for (let i = 0; i < connections.length; i++) {
      const nextVertex = connections[i];
      if (seen.has(nextVertex)) continue;
      queue.push(nextVertex);
    }
  }

  console.timeEnd("graphTraverseBFS");
  return values;
};

console.log(
  graphTraverseBFS([
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
); // Array(9) [ 0, 1, 3, 4, 5, 2, 6, 8, 7 ]
