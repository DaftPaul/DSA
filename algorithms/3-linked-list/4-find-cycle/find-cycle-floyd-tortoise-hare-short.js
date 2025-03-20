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
    if (tortoise === hare) return true;
  }
};

// time complex: O(n)
// space complex: O(1)
