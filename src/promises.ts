const promise1 = Promise.resolve(3)
const promise2 = () => (new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo"),
))
const promise3 = 42
const promises = [promise1, promise3]

// Promise.allSettled(promises).then((results) =>
//   results.forEach((result) => console.log(result.status)),
// );
Promise.all(promises)
  .then((values) => {
    console.log(values)
  })
  .then((values) => {
    console.log("then 2")
  })
  .then((values) => {
    console.log("then 3")
}).catch(console.error)

function doSomething(action) {
  return Promise.try(action)
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("Done"))
}

doSomething(() => "Sync result")

doSomething(() => {
  throw new Error("Sync error")
})

doSomething(async () => "Async result")

doSomething(async () => {
  throw new Error("Async error")
})
