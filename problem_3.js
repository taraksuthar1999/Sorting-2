

function mergeSort(Arr, start, end) {
    if (start == end) return 0
    let mid = Math.floor((start + end) / 2)
    const count1 = mergeSort(Arr, start, mid)
    const count2 = mergeSort(Arr, mid + 1, end)
    let i = start
    let j = mid + 1
    let count = 0
    while (i <= mid && j <= end) {
        if (Arr[i] > 2 * Arr[j]) {
            count += (end - start + 1) - i
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

console.log(mergeSort([1, 3, 2, 3, 1], 0, 4))


/**
 * 3
 * [2,4,3,9]  [7,8,6]
 * 
 * 2 4 3    1 5
 * 
 */