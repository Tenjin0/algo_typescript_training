type Fn = (accum: number, curr: number) => number

export function reduce(nums: number[], fn: Fn, init: number): number {
    let tmp = init
    for (let i = 0; i < nums.length; i++) {
        tmp = fn(tmp, nums[i])
    }
    return tmp
};
