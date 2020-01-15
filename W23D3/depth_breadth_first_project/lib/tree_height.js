function treeHeight(root) {
    if (!root) return -1;

    let edges = 0;
    if (root.left || root.right) edges += 1;
    if (root.left) {
        let leftHeight = treeHeight(root.left);
        if (leftHeight !== -1) edges += leftHeight;
    }
    
    let rightHeight = treeHeight(root.right);
    if (rightHeight !== -1) edges += rightHeight;

    return edges;
}


module.exports = {
    treeHeight
};