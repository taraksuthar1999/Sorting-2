function mergeSort(Arr, start, end) {
    if (start == end) return
    const mid = Math.floor((start + end) / 2)
    mergeSort(Arr, start, mid)
    mergeSort(Arr, mid + 1, end)
    merge(Arr, start, mid, end)
    return Arr
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

console.log(mergeSort([2, 4, 3, 9, 7, 8, 6], 0, 6))