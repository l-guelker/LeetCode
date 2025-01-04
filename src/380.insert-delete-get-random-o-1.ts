/*
 * @lc app=leetcode id=380 lang=typescript
 *
 * [380] Insert Delete GetRandom O(1)
 */

// @lc code=start
class RandomizedSet {
    rand_set: Set<number>;

    constructor() {
        this.rand_set = new Set<number>();
    }

    insert(val: number): boolean {
        if (this.rand_set.has(val)) {
            return false;
        } else {
            this.rand_set.add(val);
            return true;
        }
    }

    remove(val: number): boolean {
        return this.rand_set.delete(val);
    }

    getRandom(): number {
        let items = Array.from(this.rand_set);
        return items[Math.floor(Math.random() * items.length)];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

