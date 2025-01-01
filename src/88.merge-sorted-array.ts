/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let j: number = 0;

    for (let i = 0; i < m+n && j < n; i++) {
        if (nums2[j] < nums1[i]) {
            nums1.splice(i, 0, nums2[j]);
            nums1.pop();
            j++;
        } else if (i >= m + j) {
            nums1[i] = nums2[j];
            j++;
        }
    }
};
// @lc code=end
