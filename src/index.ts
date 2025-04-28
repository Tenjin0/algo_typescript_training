// const fs = require("fs")
import * as fs from "fs"
import process from "node:process"

import { add } from "./utils";
import { twoSum } from "./two_sum"

type Success<T> = { data: T, error: null} 
type Failure<E> = {data: null, error: E}
type Result<T, E extends Error> =  Success<T> | Failure<E>
async function tryCatch<T, E extends Error = Error> (promise: Promise<T>): Promise<Result<T, E>> {
    try {
        const data = await promise
        return { data, error: null}
    }
    catch(error) {
        return { data: null, error: error as E}
    }
} 
const tryCatch2 = async <T, E extends Error = Error> (promise: Promise<T>): Promise<Result<T, E>> => {
    try {
        const data = await promise
        return { data, error: null}
    }
    catch(error) {
        return { data: null, error: error as E}
    }
} 
console.log(process.versions.v8)
console.log(process.version)
setTimeout(() => {
    console.log("set timeout")
})

process.nextTick(() => {
    console.log('next tick')
})

setImmediate(() => {
    console.log("set immediate")
})

fs.access('./index.mjs',(err: NodeJS.ErrnoException | null) => {
    console.log(err, "access")
} )

new Promise((resolve) => {
    console.log("new Promise")
    resolve(null)
}).then(() => {
    console.log('hello')
}).then(() => {
    console.log("tu vaux mieux que ca 1")
})

new Promise((resolve) => {
    console.log("new Promise")
    resolve(null)
}).then(() => {
    console.log('hello 2')
}).then(() => {
    console.log("tu vaux mieux que ca 2")
})
async function toto() {
    const result = await tryCatch<String>(
        new Promise((resolve) => {
            resolve("data")
        })
    )
    console.log(result)
}
toto()
console.log(twoSum([2, 4], 6))
console.log("sum", add(1, 3));
