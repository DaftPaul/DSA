// leetcode problem: https://leetcode.com/problems/implement-queue-using-stacks/description/

class QueueWithStacks {
  constructor() {
    this.in = [];
    this.out = [];
  }

  /**
   * @param {number} value
   * @return {void}
   */
  enqueue(value) {
    this.in.push(value);
    return value;
  }

  /**
   * @return {number}
   */
  dequeue() {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        const element = this.in.pop();
        this.out.push(element);
      }
    }
    return this.out.pop();
  }

  /**
   * @return {number}
   */
  peek() {
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop())
      }
    }
    return this.out[this.out.length -1];
  }

  /**
   * @return {boolean}
   */
  empty() {
    return this.out.length === 0 && this.in.length === 0;
  }
}

// time complex: O(n)
// space complex: O(n)

const newQueue = new QueueWithStacks();
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
newQueue.dequeue();
console.log(newQueue);
newQueue.enqueue(5);
console.log("newQueue.peek() :", newQueue.peek());
console.log("newQueue.empty() :", newQueue.empty());
newQueue.dequeue();
newQueue.dequeue();
console.log(newQueue);
