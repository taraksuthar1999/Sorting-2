/**
Given an array of integers A, we call (i, j) an important reverse pair if i < j and A[i] > 2*A[j].
Return the number of important reverse pairs in the given array A.
 */

/**
 * TC: O(nlogn)
 * SC: 0(n)
 * @param {number[]} A 
 * @returns 
 */
function reversePairs(A) {
    const ans = mergeSort(A, 0, A.length - 1)
    return ans
}

reversePairs([14046, 57239, 78362, 99387, 27609, 55100, 65536, 62099, 40820, 33056, 88380, 78549, 57512, 33137, 81212, 32365, 42276, 65368, 52459, 74924, 25355, 76044, 78056, 45190, 94365, 58869, 20611])

function mergeSort(Arr, start, end) {
    if (start >= end) return 0
    let mid = Math.floor((start + end) / 2)
    const count1 = mergeSort(Arr, start, mid)
    const count2 = mergeSort(Arr, mid + 1, end)
    let i = start
    let j = mid + 1
    let count = 0
    while (i <= mid && j <= end) {
        if (Arr[i] > 2 * Arr[j]) {
            count += (mid - i + 1)
            j++
        } else {
            i++
        }
    }
    merge(Arr, start, mid, end)
    return count + count1 + count2
}


function merge(Arr, start, mid, end) {
    let first = start
    let second = mid + 1
    let temp = new Array(end - start + 1)
    let i = 0
    while (first <= mid && second <= end) {
        if (Arr[first] <= Arr[second]) {
            temp[i] = Arr[first]
            first++; i++;
        } else {
            temp[i] = Arr[second]
            second++; i++;
        }
    }
    while (first <= mid) {
        temp[i] = Arr[first]
        first++; i++;
    }
    while (second <= end) {
        temp[i] = Arr[second]
        second++; i++;
    }

    let j, index;
    for (j = start, index = 0; j <= end && index < i; j++, index++) {
        Arr[j] = temp[index]
    }
    return Arr
}

// https://leetcode.com/problems/reverse-pairs/