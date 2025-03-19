/**
 * You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of
 * travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the
 * target node, and wi is the time it takes for a signal to travel from source to target.
 *
 * We will send a signal from a given node k. Return the minimum time it takes for all the n nodes
 * to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.
 *
 */
/**
 * Leetcode: https://leetcode.com/problems/network-delay-time/
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 * Bellman-ford algorithm
 */
const networkDelayTime = function (times, n, k) {
  const distances = Array.from({ length: n }, () => Infinity); // T O(n)
  console.log("distances :", distances);
  distances[k - 1] = 0;

  for (let i = 0; i < n - 1; i++) {
    // T O(n)
    let hasChanged = false;
    for (let j = 0; j < times.length; j++) {
      // T O(E)
      const [vertex, targetVertex, weight] = times[j];
      if (distances[vertex - 1] + weight < distances[targetVertex - 1]) {
        distances[targetVertex - 1] = distances[vertex - 1] + weight;
        hasChanged = true;
      }
    }
    console.log("distances :", distances);
    if (!hasChanged) break;
  }

  const ans = Math.max(...distances);
  return ans === Infinity ? -1 : ans;
};

// T complex: O(N*E) where E is the edges and N the number of vertex
// S complex: O(N)

// console.log(
//   networkDelayTime(
//     [
//       [1, 4, 2],
//       [1, 2, 9],
//       [4, 2, -4],
//       [2, 5, -3],
//       [4, 5, 6],
//       [5, 3, 7],
//       [3, 2, 3],
//       [3, 1, 5],
//     ],
//     5,
//     1
//   )
// ); // 2

console.log(
  networkDelayTime(
    [
      [1, 2, 9],
      [1, 4, 2],
      [2, 5, 1],
      [4, 2, 4],
      [4, 5, 6],
      [3, 2, 3],
      [5, 3, 7],
      [3, 1, 5],
    ],
    5,
    1
  )
); // 14

// console.log(
//   networkDelayTime(
//     [
//       [2, 1, 1],
//       [2, 3, 1],
//       [3, 4, 1],
//     ],
//     4,
//     2
//   )
// ); // 2
