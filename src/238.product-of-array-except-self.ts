/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
    let result: number[] = [];

    if (nums.includes(0)) {
        for (let i = 0; i < nums.length; i++) {
            let nums_sub: number[] = Array.from(nums);
            nums_sub.splice(i, 1);
            if (nums_sub.length !== 0) {
                result[i] = nums_sub.reduce((a, b) => a * b);
            } else {
                result[i] = 0;
            }
        }
    } else {
        let product: number = nums.reduce((a, b) => a * b);
        for (let i = 0; i < nums.length; i++) {
            result[i] = product / nums[i];
        }
    }

    return result;
};
// @lc code=end

