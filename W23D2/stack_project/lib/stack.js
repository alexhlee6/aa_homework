// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    if (this.top) node.next = this.top;
    this.top = node;
    if (!this.bottom) this.bottom = node;
    this.length += 1;
    return this.length;
  }

  pop() {
    if (this.length === 0) return null;
    if (this.length === 1) {
      let val = this.top.value;
      this.top = null;
      this.bottom = null;
      this.length -= 1;
      return val;
    } else {
      let newTop = this.top.next;
      let currTop = this.top;
      this.top = newTop;
      this.length -= 1;
      return currTop.value;
    }
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
