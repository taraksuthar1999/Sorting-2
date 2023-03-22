function check(A, B) {
    let i = 0
    let j = 0
    let count = 0
    while (i < A.length && j < B.length) {
        if (A[i] > 2 * B[j]) {
            count += A.length - i
            j++
        } else {
            i++
        }
    }
    console.log(count)
}

check([1, 2, 4, 7, 9, 11], [3, 5, 10])

/**
 * given sorted array count pairs (i,j) such that A[i] > 2 * B[j]
 * A = [1,2,4,7,9,11]
 * B=[3,5,10]
 */