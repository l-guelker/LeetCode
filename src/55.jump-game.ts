/*
 * @lc app=leetcode id=55 lang=typescript
 *
 * [55] Jump Game
 */

// @lc code=start
function canJump(nums: number[]): boolean {
    let max_reach: number = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > max_reach) {
            return false;
        }
        max_reach = Math.max(max_reach, i + nums[i]);
    }

    return max_reach >= nums.length - 1;
};
// @lc code=end

