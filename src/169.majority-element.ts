/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    let occurance_count: Map<number, number> = new Map();

    nums.forEach((num: number ) => {
        let cur_occurance: number | undefined = occurance_count.get(num);

        if (cur_occurance === undefined) {
            occurance_count.set(num, 1);
        } else {
            occurance_count.set(num, cur_occurance + 1);
        }
    });

    return [...occurance_count.entries()].reduce((a, b) => a[1] > b[1] ? a : b)[0];
};
// @lc code=end

