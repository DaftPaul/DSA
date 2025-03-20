// leetcode problem: https://leetcode.com/problems/implement-queue-using-stacks/description/

var QueueWithStacks = function () {
  this.in = [];
  this.out = [];
};

/** 
* @param {number} x
* @return {void}
*/
QueueWithStacks.prototype.push = function (x) {
  this.in.push(x);
  return x
};

/**
* @return {number}
*/
QueueWithStacks.prototype.pop = function () {
  if (this.out.length === 0) {
      while (this.in.length > 0) {
          const element = this.in.pop();
          this.out.push(element)
      }
  }
  return this.out.pop();
};

/**
* @return {number}
*/
QueueWithStacks.prototype.peek = function () {
  if (this.out.length > 0) return this.out[this.out.length - 1];
  return this.in[0]
};

/**
* @return {boolean}
*/
QueueWithStacks.prototype.empty = function () {
  return this.out.length === 0 && this.in.length === 0;
};