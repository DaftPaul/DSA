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
 * Topological sort approach
 */
const canFinish = function (numCourses, prerequisites) {
  // get adjacentList
  const [adjacentList, inDegreeList] = getAdjacentListAndInDegree(
    numCourses,
    prerequisites
  );
  console.log("inDegreeList :", inDegreeList);
  console.log("courses :", adjacentList);

  const stack = [];

  for (let i = 0; i < inDegreeList.length; i++) {
    // T O(n)
    const inDegreeValue = inDegreeList[i];

    if (inDegreeValue === 0) stack.push(i);
  }

  let count = 0;

  while (stack.length) {
    // T: O(n)
    const current = stack.pop();
    count++;

    const adjacent = adjacentList[current];
    for (let i = 0; i < adjacent.length; i++) {
      // T: O(n)
      const nextVertex = adjacent[i];
      inDegreeList[nextVertex]--;

      if (inDegreeList[nextVertex] === 0) {
        stack.push(nextVertex);
      }
    }
  }

  // if count is less then total num there is a cycle
  return count === numCourses;
};

const getAdjacentListAndInDegree = (n, prerequisites) => {
  const adjecentList = new Array(n).fill(0).map(() => []); // T O(n)
  const inDegreeList = new Array(n).fill(0); // T O(n)

  for (let i = 0; i < prerequisites.length; i++) {
    // T O(n)
    const [course, prerequisite] = prerequisites[i];
    adjecentList[prerequisite].push(course);
    inDegreeList[course]++;
  }

  return [adjecentList, inDegreeList];
};

// T: O(P + n**2) || O(P + n + E)
// S: O(n**2)

// console.log(
//   canFinish(7, [
//     [0, 3],
//     [1, 0],
//     [2, 1],
//     [4, 5],
//     [6, 4],
//     [5, 6],
//   ])
// ); // false

// console.log(
//   canFinish(6, [
//     [1, 0],
//     [2, 1],
//     [2, 5],
//     [0, 3],
//     [4, 3],
//     [3, 5],
//     [4, 5],
//   ])
// ); // true
