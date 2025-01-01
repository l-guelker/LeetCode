/*
 * @lc app=leetcode id=80 lang=typescript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    let known1: Set<number> = new Set();
    let known2: Set<number> = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (known1.has(nums[i])) {
            if (known2.has(nums[i])) {
                nums.splice(i, 1);
                i--;
            } else {
                known2.add(nums[i]);
            }
        } else {
            known1.add(nums[i]);
        }
    }

    return nums.length;
};
// @lc code=end

