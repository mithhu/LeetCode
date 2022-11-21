/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    buildMaxHeap(nums);
    for (let endI = nums.length - 1; endI > 0; endI--) {
        swap(0, endI, nums);
        siftDown(0, endI - 1, nums);
    }
    return nums;
};

function buildMaxHeap(arr) {
    let parentI = Math.floor((arr.length - 2) / 2);
    for (let curr = parentI; curr >= 0; curr--) {
        siftDown(curr, arr.length - 1, arr);
    }
}

function siftDown(curr, e, arr) {
    let ch1 = curr * 2 + 1;
    while (ch1 <= e) {
        let ch2 = curr * 2 + 2 <= e ?  curr * 2 + 2 : -1;
        let idxSwap;
        if (ch2 !== -1 && arr[ch2] > arr[ch1]) {
            idxSwap = ch2;
        } else {
            idxSwap = ch1;
        }
        if (arr[idxSwap] > arr[curr]) {
            swap(idxSwap, curr, arr);
            curr = idxSwap;
            ch1 = curr * 2 + 1;
        } else {
            return;
        }
    }
}

function swap(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

