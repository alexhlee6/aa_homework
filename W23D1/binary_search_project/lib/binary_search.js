function binarySearch(array, target) {
    if (array.length === 0) return false;
    
    let midIdx = Math.floor(array.length / 2);
    let left = array.slice(0, midIdx);
    let right = array.slice(midIdx + 1);

    if (array[midIdx] === target) {
        return true;
    } else {
        if (array[midIdx] > target) {
            return binarySearch(left, target);
        } else {
            return binarySearch(right, target);
        }
    }
}

function binarySearchIndex(array, target) {
    if (array.length === 0) return -1;

    let midIdx = Math.floor(array.length / 2);
    let left = array.slice(0, midIdx);
    let right = array.slice(midIdx + 1);

    if (array[midIdx] === target) {
        return midIdx;
    } else if (array[midIdx] > target) {
        return binarySearchIndex(left, target);
    } else {
        let searchResult = binarySearchIndex(right, target);
        if (searchResult < 0) {
            return searchResult;
        } else {
            return midIdx + 1 + searchResult;
        }
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};