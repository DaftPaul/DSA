/**
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you
 * must take course bi first if you want to take course ai.
 *
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 *
 * Return true if you can finish all courses. Otherwise, return false.
 */

/**
 * Leetcode: https://leetcode.com/problems/course-schedule/
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * BFS approach
 */
const canFinish = function (numCourses, prerequisites) {
  // get adjacentList
  const courses = getAdjacentList(numCourses, prerequisites);
  return BFS(courses);
};

const BFS = (graph) => {
  // iterate over every vertex
  for (let v = 0; v < graph.length; v++) {
    // T O(n)
    // spread the connections of the initial vertex (course)
    // in order to avoid touch the first vertex value to check
    // at the bottom condition if is repeated
    const queue = [...graph[v]];
    const seen = new Map();

    while (queue.length) {
      // T O(n)
      const vertexQueue = queue.shift();
      seen.set(vertexQueue, true);

      // check if the initial vertex (v) is repeated
      if (vertexQueue === v) return false;

      const connections = graph[vertexQueue];
      for (let i = 0; i < connections.length; i++) {
        // T O(n)
        const nextVertex = connections[i];

        if (!seen.has(nextVertex)) {
          queue.push(nextVertex);
        }
      }
    }
  }

  return true;
};

const getAdjacentList = (numCourses, prerequisites) => {
  const adjecentList = new Array(numCourses).fill(0).map(() => []); // T O(n)

  for (let i = 0; i < prerequisites.length; i++) {
    // T O(n)
    const [course, prerequisite] = prerequisites[i];
    adjecentList[prerequisite].push(course);
  }

  return adjecentList;
};

// T: O(P + n**3)
// S: O(n**2)

console.log(
  canFinish(7, [
    [0, 3],
    [1, 0],
    [2, 1],
    [4, 5],
    [6, 4],
    [5, 6],
  ])
); // false

console.log(
  canFinish(6, [
    [1, 0],
    [2, 1],
    [2, 5],
    [0, 3],
    [4, 3],
    [3, 5],
    [4, 5],
  ])
); // true
