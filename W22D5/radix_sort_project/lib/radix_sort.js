function radixSort(arr) {
    if (! Array.isArray(arr) ) return null;

    let negatives = arr.filter(item => item < 0);
    let negativesSorted = [];
    if (negativesSorted.length > 0) {
        negativesSorted = radixSort(negatives.map(item => Math.abs(item)))
            .reverse()
            .map(item => -item);
    }

    let positives = arr.filter(item => item >= 0);
    let maxDigits = getMaxDigits(arr);

    for (let i = 0; i < maxDigits; i++) {
        let buckets = Array.from({length: 10}, () => []);

        for (let j = 0; j < positives.length; j++) {
            let digit = getDigitFrom(positives[j], i);
            buckets[digit].push(positives[j]);
        }
        positives = [].concat(...buckets);
    }
    return negativesSorted.concat(positives);
}

function getDigitFrom(num, place) {
    return Math.floor(num / Math.pow(10, place)) % 10;
}

function getIntLength(num) {
    let count = 1;
    while (num >= 10) {
        num /= 10;
        count += 1;
    }
    return count;
}

function getMaxDigits(nums) {
    return getIntLength(Math.max(...nums));
}

module.exports = {
    radixSort
};