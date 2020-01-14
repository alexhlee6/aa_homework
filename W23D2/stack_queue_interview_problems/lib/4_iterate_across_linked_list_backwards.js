// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Iterate over a Singly Linked List of primitives backwards. When finished, 
// return a string representing the original linked list's values backwards 
// in the following format:
//
//                             'A -> B -> C -> D' 
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must be iterative, not recursive.
// (2) Your function must consume O(n) space.
// (3) Employee either a Stack, Queue, or some combination of the two in your
//     solution. (Implement any data structures you need, as you need them.)
//
//
// -----------
// Let's code!
// -----------
// linked list has head, tail, length; node has value, next
function iterateAcrossLinkedListBackwards(linkedList) {
    // TODO: Implement the iterateAcrossLinkedListBackwards function here
    if (linkedList.length === 0) return "";
    if (linkedList.length === 1) return `${linkedList.head.value}`;
    let result = `${linkedList.head.value}`;
    let node = linkedList.head.next;
    while(node) {
        result = node.value + " -> " + result;
        node = node.next;
    }
    return result;
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;
