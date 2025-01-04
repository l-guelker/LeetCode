/*
 * @lc app=leetcode id=274 lang=typescript
 *
 * [274] H-Index
 */

// @lc code=start
function hIndex(citations: number[]): number {
    for (let i = citations.length; i >= 0; i--) {
        if (citations.filter((cit: number) => cit >= i).length >= i) {
            return i;
        }
    }

    return 0;
};
// @lc code=end

