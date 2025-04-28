import * as fs from "fs"


await Promise.resolve()
console.log("toto")
fs.readFile('./index.js', (err, data) => {
    console.log(data)
})

