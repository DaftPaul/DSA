export class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this._heap[0];
  }

  _parent(index) {
    return Math.floor((index - 1) / 2);
  }

  _leftChild(index) {
    return index * 2 + 1;
  }

  _rightChild(index) {
    return index * 2 + 2;
  }

  _swap(i, j) {
    const temp = this._heap[i];
    this._heap[i] = this._heap[j];
    this._heap[j] = temp;
  }

  _compare(i, j) {
    this._comparator(this._heap[i], this._heap[j]);
  }

  // insertion(value) {
  //   const newLength = this._heap.push(value);
  //   let valueIndex = newLength - 1;
  //   let parentIndex = this._parent(valueIndex);

  //   while (nodeIndex > 0 && this._compare(valueIndex, parentIndex)) {
  //     this._swap(valueIndex, parentIndex);
  //     valueIndex = parentIndex;
  //     parentIndex = this._parent(valueIndex);
  //   }

  //   return this.size();
  // }

  push(value) {
    this._heap.push(value);
    this._siftUp();

    return this.size();
  }

  _siftUp() {
    let nodeIndex = this.size() - 1;

    while (nodeIndex > 0 && this._compare(nodeIndex, this._parent(nodeIndex))) {
      this._swap(nodeIndex, this._parent(nodeIndex));
      nodeIndex = this._parent(nodeIndex);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }
    const value = this._heap.pop();
    this._siftDown();
    return value;
  }

  _siftDown() {
    let nodeIndex = 0;

    while (
      (this._leftChild(nodeIndex) < this.size() &&
        this._compare(this._leftChild(nodeIndex), nodeIndex)) ||
      (this._rightChild(nodeIndex) < this.size() &&
        this._compare(this._rightChild(nodeIndex), nodeIndex))
    ) {
      const leftChildIndex = this._leftChild(nodeIndex);
      const rightChildIndex = this._rightChild(nodeIndex);

      const greaterNodeIndex =
        rightChildIndex < this.size() &&
        this._compare(rightChildIndex, leftChildIndex)
          ? rightChildIndex
          : leftChildIndex;

      this._swap(greaterNodeIndex, nodeIndex);
      nodeIndex = greaterNodeIndex;
    }
  }
}
