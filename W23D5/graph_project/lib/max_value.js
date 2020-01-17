function maxValue(node, visited=new Set()) {
    if (visited.has(node.val)) return;

    visited.add(node.val);
    node.neighbors.forEach(neighbor => maxValue(neighbor, visited));
    return Math.max(...Array.from(visited));
}

module.exports = {
    maxValue
};