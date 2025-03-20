const findCycle = (head) => {
  let currentNode = head;
  const hashMap = new Map()

  while (currentNode !== null) {
    if (hashMap.has(currentNode)) {
      return true;  
    }
    hashMap.set(currentNode, currentNode.value);
    currentNode = currentNode.next
  }
  return false;
}