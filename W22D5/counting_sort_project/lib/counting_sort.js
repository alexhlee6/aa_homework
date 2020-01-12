function countingSort(arr, max) {
    let countArr = new Array(max + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        countArr[arr[i]] += 1;
    }

    let result = [];
    countArr.forEach((count, i) => {
        if (count > 0) {
            while (count > 0) {
                result.push(i);
                count -= 1;
            }
        }
    });
    return result;
}


module.exports = {
    countingSort
};