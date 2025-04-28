type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const cache = {}
    return function inner(...args) {
        inner['_cache'] = cache
        const parameters = JSON.stringify(args)
        if (parameters in cache) {
            return cache[parameters]
        } else {
            const res = fn.call(this, ...args)
            cache[parameters] = res
            return res
        }
    }
}
let callCount = 0
const memoizedFn = memoize(function sum(a, b) {
    callCount += 1
    return a + b
})
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 4)) // 5
console.log(callCount) // 1 

function sum () {

}

console.log(sum.prototype)
