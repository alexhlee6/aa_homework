function merge(array1, array2) {
    let newArr = [];

    while (array1.length > 0 && array2.length > 0) {
        if (array1[0] < array2[0]) {
            newArr.push(array1.shift());
        } else {
            newArr.push(array2.shift());
        }
    }
    return newArr.concat(array1.concat(array2));
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    let midIdx = Math.floor(array.length/2);
    let left = array.slice(0, midIdx);
    let right = array.slice(midIdx);

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
}

module.exports = {
    merge,
    mergeSort
};