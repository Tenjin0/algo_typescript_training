import { reduce } from "../src/reduce"

function sum(accum, curr) { return accum + curr }
console.log("hello")
console.log(reduce([1,2,3,4], sum, 0))
