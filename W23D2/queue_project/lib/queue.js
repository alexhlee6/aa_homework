// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null; 
    this.length = 0;
  }

  enqueue(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
    this.length += 1;
    return this.length;
  }

  dequeue() {
    if (this.length === 0) return null;
    if (this.length === 1) {
      let only = this.front;
      this.front = null;
      this.back = null;
      this.length -= 1;
      return only.value;
    } else {
      let oldFront = this.front;
      this.front = this.front.next;
      this.length -= 1;
      return oldFront.value;
    }
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;