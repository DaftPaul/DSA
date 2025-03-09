import { LinkNode } from "../linked-list.js";

const findCycle = (head) => {
  if (!head) return false;
  let tortoise = head,
    hare = head;

  while (true) {
    tortoise = tortoise.next;
    hare = hare.next;
    if (hare === null || hare.next === null) return false;
    else {
      hare = hare.next;
    }
    if (tortoise === hare) break;
  }

  let meetingNode = hare,
    firstNode = head;

  while (firstNode !== meetingNode) {
    firstNode = firstNode.next;
    meetingNode = meetingNode.next;
  }
  return meetingNode;
};

const linkNode = new LinkNode(1);
linkNode.next = new LinkNode(2, new LinkNode(3, linkNode))

console.log(findCycle(linkNode));

// time complex: O(n)
// space complex: O(1)
