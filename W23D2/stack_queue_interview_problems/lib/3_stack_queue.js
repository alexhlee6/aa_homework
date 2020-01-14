// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor() {
        this.length = 0;
        this.top = null;
        this.bottom = null;
    }

    push(node) {
        let newNode = new Node(node.value);
        if (this.length === 0) {
            this.bottom = newNode;
            this.top = newNode;
            this.length = 1;
        } else {
            newNode.next = this.top;
            this.top = newNode;
            this.length += 1;
        }
        return this.length;
    }

    pop() {
        if (this.length === 0) return null;
        if (this.length === 1) {
            let temp = this.top;
            this.top = null;
            this.bottom = null;
            this.length = 0;
            return temp;
        } else {
            let rmNode = this.top;
            this.top = rmNode.next;
            this.length -= 1;
            return rmNode;
        }
    }

    size() {
        return this.length;
    }
}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor() {
        this.front = null;
        this.back = null;
        this.inStack = 0;
        this.outStack = 0;
    }

    enqueue(val) {
        let node = new Node(val);
        if (this.size() === 0) {
            this.front = node;
            this.back = node;
            this.inStack += 1;
        } else {
            this.back.next = node;
            this.back = node;
            this.inStack += 1;
        }
        return this.size();
    }

    dequeue() {
        if (this.size() === 0) return null;
        if (this.size() === 1) {
            let temp = this.front;
            this.front = null;
            this.back = null;
            this.inStack = 0;
            this.outStack += 1;
            return temp;
        } else {
            let temp = this.front;
            this.front = temp.next;
            this.inStack -= 1;
            this.outStack += 1;
            return temp;
        }
    }

    size() {
        return this.inStack;
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
