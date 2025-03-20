import { PriorityQueue } from "./priority-queue";
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
 * djkstra's algorithm
 */
const networkDelayTime = function (times, n, k) {
  const adjencyList = getAdjencyListAndTimes(n, times);
  console.log("adjencyList :", adjencyList);
  const distances = adjencyList.map(() => Infinity);
  distances[k - 1] = 0;

  const heap = new PriorityQueue((a, b) => distances[a] < distances[b]);
  heap.push(k - 1);
  while (!heap.isEmpty()) {
    const currentVertex = heap.pop();

    const adjency = adjencyList[currentVertex];

    for (let i = 0; i < adjency.length; i++) {
      const [neighboringVertex, weight] = adjency[i];

      if (distances[currentVertex] + weight < distances[neighboringVertex]) {
        distances[neighboringVertex] = distances[currentVertex] + weight;
        heap.push(neighboringVertex);
      }
    }
  }
  const answer = Math.max(...distances);

  return answer === Infinity ? -1 : answer;
};

const getAdjencyListAndTimes = (n, times) => {
  const adjencyList = Array.from({ length: n }, () => []);

  for (let i = 0; i < times.length; i++) {
    const [vertex, nextVertex, weight] = times[i];
    adjencyList[vertex - 1].push([nextVertex - 1, weight]);
  }

  return adjencyList;
};

// T complex: E*log(N) where E is the edges and N the number of vertex
// S complex: O(E+N)

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
