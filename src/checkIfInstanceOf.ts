function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    if (obj == null || classFunction == null) return false;
    if (typeof classFunction !== "function") return false;
    if (Object.getPrototypeOf(obj) === classFunction.prototype ) {
        return true
    }
    try {
        return obj instanceof classFunction
    }
    catch(e) {
        return false
    }
};

// console.log(checkIfInstanceOf(new Date(), Date))
// console.log(checkIfInstanceOf(5, Number))
console.log(checkIfInstanceOf(5n, BigInt))
// console.log(checkIfInstanceOf(NaN, Object))
// console.log(checkIfInstanceOf(null, null))
// console.log(checkIfInstanceOf(null, Object))
// console.log(checkIfInstanceOf([], []))
// console.log(checkIfInstanceOf(false, Boolean))
// console.log(checkIfInstanceOf('', String))
// console.log(checkIfInstanceOf(Error(), Error))
console.log(null == undefined)
