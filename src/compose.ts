type F = (x: number) => number;

function compose(functions: F[]): F {
    
    return function(x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            const fn = functions[i];
            x = fn(x)
        }
        return x
    }
};

function compose2(functions: F[]): F {
    let result = 0;
    return (x) => {
        functions?.reverse().forEach((func) =>{
            result = func(x);
            x = result
        })
        return x
    }
};
const fn = compose([x => x + 1, x => x * x, x => 2 * x])
const fn2 = compose2([x => x + 1, x => x * x, x => 2 * x])


console.time("compose2")
console.log(fn2(4))
console.timeEnd("compose2")
console.time("compose2")
console.log(fn2(4))
console.timeEnd("compose2")
console.time("compose1")
console.log(fn(4))
console.timeEnd("compose1")
