/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number { // nums ascending order
    let known: Set<number> = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (known.has(nums[i])) {
            nums.splice(i, 1);
            i--;
        } else {
            known.add(nums[i]);
        }
    }

    return nums.length;
};
// @lc code=end

