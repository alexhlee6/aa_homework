// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    if (idx + 2 > array.length - 1) return true; 

    let leftIdx = leftChildIdx(idx);
    let rightIdx = rightChildIdx(idx);

    let leftVal = array[leftIdx];
    let rightVal = array[rightIdx];
    let currVal = array[idx];

    if (currVal < leftVal || currVal < rightVal) return false;

    let leftRes = isMaxHeap(array, leftIdx);
    let rightRes = isMaxHeap(array, rightIdx);
    return (leftRes && rightRes);
}

function leftChildIdx(idx) {
    return idx * 2;
}
function rightChildIdx(idx) {
    return idx * 2 + 1;
}


module.exports = {
    isMaxHeap
};