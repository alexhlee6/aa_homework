function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];

        let j = i-1;
        while (j >= 0 && arr[j] > current) {
            arr[j+1] = arr[j];
            j -= 1;
        }
        arr[j + 1] = current;
    }
    return arr;
}

// [2, -1, 4, 3, 7, 3 ] => [2, 4, 3, 7]

module.exports = {
    insertionSort
};