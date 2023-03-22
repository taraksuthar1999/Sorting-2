/**
 * TC: O(nlogn)
 * SC: O(1)
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    points.sort((a, b) => {
        let A = (a[0] * a[0]) + (a[1] * a[1])
        let B = (b[0] * b[0]) + (b[1] * b[1])
        return A - B
    })
    return points.slice(0, k)
};

//https://leetcode.com/problems/k-closest-points-to-origin/