function breadthFirstSearch(startingNode, targetVal) {
    let visited = new Set();
    let queue = [startingNode];
    
    while (queue[0]) {
        let currNode = queue[0];
        if (visited.has(currNode.val)) {
            queue.shift();
            continue;
        }

        if (currNode.val === targetVal) return currNode;
        visited.add(currNode.val);
        currNode.neighbors.forEach(node => queue.push(node));
        queue.shift();
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};