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
  const timeList = Array.from({ length: n }, () => Infinity);
  timeList[k - 1] = 0;
  const queue = [];
  const map = new Map();
  queue.push(k - 1);

  while (queue.length) {
    const vertex = queue.shift();
    map.set(vertex, true);
    const connections = adjencyList[vertex];

    for (let i = 0; i < connections.length; i++) {
      const [nextConnection, weight] = connections[i];
      if (map.has(nextConnection)) continue;

      timeList[nextConnection] = Math.min(
        timeList[nextConnection],
        timeList[vertex] !== Infinity ? weight + timeList[vertex] : weight
      );
    }

    let minVal = Infinity;
    let nextConnection = undefined;

    for (let i = 0; i < timeList.length; i++) {
      if (map.has(i)) continue;
      else if (minVal > timeList[i]) {
        minVal = timeList[i];
        nextConnection = i;
      }
    }
    if (minVal !== Infinity && nextConnection !== undefined) {
      queue.push(nextConnection);
    }
    console.log("timeList :", timeList);
    console.log(queue);
  }

  const result = timeList.reduce((acc, cur) => {
    return Math.max(acc, cur);
  });
  if (result === Infinity) return -1;
  return result;
};

const getAdjencyListAndTimes = (n, times) => {
  const adjencyList = Array.from({ length: n }, () => []);

  for (let i = 0; i < times.length; i++) {
    const [vertex, nextVertex, weight] = times[i];
    adjencyList[vertex - 1].push([nextVertex - 1, weight]);
  }

  return adjencyList;
};

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

console.log(
  networkDelayTime(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2
  )
); // 2
