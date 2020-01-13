// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let node = new Node(val);
        if (this.tail) this.tail.next = node;
        if (!this.head) this.head = node;
        this.tail = node;
        node.next = null;
        this.length += 1;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.head || !this.tail) return undefined;
        if (this.length === 1) {
            let node = this.tail;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return node;
        } else {
            let node = this.tail;
            let trackNode = this.head;
            while (trackNode.next !== this.tail) {
                trackNode = trackNode.next;
            }
            this.tail = trackNode;
            trackNode.next = null;
            this.length -= 1;
            return node;
        }
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let node = new Node(val);
        if (this.head) node.next = this.head;
        if (!this.tail) this.tail = node;
        this.head = node;
        this.length += 1;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        let currHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return this;
        }
        if (currHead) {
            this.head = currHead.next;
            this.length -= 1;
            return currHead;
        }
    }

    // TODO: Implement the contains method here
    contains(target) {
        let node = this.head;
        while (node) {
            if (node.value === target) return true;
            node = node.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (this.length === 0 || index + 1 > this.length) return null;
        let count = 0;
        let node = this.head;
        while (count !== index && node) {
            node = node.next;
            count += 1;
        }
        if (node) return node;
        return false;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let node = this.get(index);
        if (!node) return false;
        node.value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        let node = this.get(index);
        let prevNode = this.get(index-1);
        if (index+1 > this.length ) return false;

        let newNode = new Node(val);
        newNode.next = node;
        if (index === 0) this.head = newNode;
        if (prevNode) prevNode.next = newNode;
        this.length += 1;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        let node = this.get(index);
        let prevNode = this.get(index-1);
        if (index + 1 > this.length) return undefined;

        if (!node) {
            return undefined;
        }
        if (prevNode) {
            prevNode.next = node.next;
            if (!node.next) {
                this.tail = prevNode;
            }
        } else {
            this.head = node.next;
        }
        this.length -= 1;
        return node;
        
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
