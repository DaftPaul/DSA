

export class LinkNode {
  constructor(value, next = null) {
    this.value = value || null;
    this.next = next
  }
}

export class LinkList {
  constructor(list) {
    if (list) {
      list.forEach(value => this.append(value))
    } else {
      this.head = null;
      this.tail = null;
    }
  }

  append(value) {
    const newNode = new LinkNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode.value)
      currentNode = currentNode.next;
    }

    return nodes;
  }
}

export const convertLinkedListToArray = (head) => {
  const nodes = [];
  let currentNode = head;
  while (currentNode) {
    nodes.push(currentNode.value)
    currentNode = currentNode.next;
  }

  return nodes;
}