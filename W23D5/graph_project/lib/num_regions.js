function numRegions(graph) {
    let visited = new Set();
    let regionCount = 0;
    let keys = Object.keys(graph);

    keys.forEach(key => {
        if (!visited.has(key)) regionCount += 1;
        visited.add(key);
        let neighbors = graph[key];
        neighbors.forEach(neighbor => {
            visited.add(neighbor);
        });
    });
    return regionCount;
}

module.exports = {
    numRegions
};