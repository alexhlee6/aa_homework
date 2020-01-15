function depthFirstSearch(root, targetVal) {
    if (!root) return null;
    if (root.val === targetVal) return root;

    let leftSearch = depthFirstSearch(root.left, targetVal);
    if (leftSearch) return leftSearch;
    let rightSearch = depthFirstSearch(root.right, targetVal);
    if (rightSearch) return rightSearch;

    return null;
}


module.exports = {
    depthFirstSearch
};