class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx/2);
    }

    getLeftChild(idx) {
        //even?
        return idx*2;
    }

    getRightChild(idx) {
        return (idx*2) + 1;
    }

    siftUp(idx) {
        if (idx === 1) return;

        let parentIdx = this.getParent(idx);
        while (this.array[parentIdx] < this.array[idx] && parentIdx >= 1){
            [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
            idx = parentIdx;
            parentIdx = this.getParent(idx);
        }
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    siftDown(idx) {
        if (idx > this.array.length - 2) return null;

        let leftIdx = this.getLeftChild(idx);
        let left = this.array[leftIdx] || -Infinity;
        let rightIdx = this.getRightChild(idx);
        let right = this.array[rightIdx] || -Infinity;
        let curr = this.array[idx];

        if (left > curr || right > curr) {
            let biggerIdx;
            if (left > right) {
                biggerIdx = leftIdx;
            } else {
                biggerIdx = rightIdx;
            }
            [this.array[biggerIdx], this.array[idx]] = [this.array[idx], this.array[biggerIdx]];
            this.siftDown(biggerIdx);
        } else {
            return;
        }
    }

    deleteMax() {
        if (this.array.length === 2) return this.array.pop();
        if (this.array.length <= 1) return null;
        
        let max = this.array[1];
        this.array[1] = this.array.pop();
        this.siftDown(1);

        return max;
    }
}

module.exports = {
    MaxHeap
};