// const fs = require("fs")
import * as fs from "fs"

setTimeout(() => {
    console.log("set timeout")
})

process.nextTick(() => {
    console.log('next tick')
})

setImmediate(() => {
    console.log("set immediate")
})

fs.access('./index.mjs',(err, data) => {
    console.log(data)
} )

Promise.resolve().then(() => {
    console.log('hello')
}).then(() => {
    console.log("tu vaux mieux que ca 1")
})
Promise.resolve().then(() => {
    console.log('hello 2')
}).then(() => {
    console.log("tu vaux mieux que ca 2")
})



