/*
 * @lc app=leetcode id=45 lang=typescript
 *
 * [45] Jump Game II
 */

// @lc code=start
function jump(nums: number[]): number {
    let close: number = 0;
    let far: number = 0;
    let jump_count: number = 0;

    while (far < nums.length - 1) {
        let max: number = 0;

        for (let i = close; i <= far; i++) {
            max = Math.max(max, i + nums[i]);
        }

        close = far + 1;
        far = max;
        jump_count++;
    }

    return jump_count;
};
// @lc code=end

