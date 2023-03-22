/**
 * TC: O(nlogn)
 * SC: O(1)
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
    nums.sort((a, b) => a - b)
    let count = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] >= nums[i]) {
            let a = nums[i]
            while (a <= nums[i - 1]) {
                a++
                count++
            }
            nums[i] = a
        }
    }
    return count
};

//https://leetcode.com/problems/minimum-increment-to-make-array-unique/