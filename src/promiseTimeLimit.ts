type Fn = (...params: any[]) => Promise<any>;


function timeLimit(fn: Fn, t: number): Fn {
    
    return async function(...args) {
        const timeLimitPromise = [
            fn(...args),
            new Promise((resolve, reject) => {
                setTimeout(() => reject("Time Limit Exceeded"), t)
            })
        ];

        const response = await Promise.race(timeLimitPromise); // first promise to be resolved ou rejected
        return response;
    }
};

const fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
}
const inputs = [5]
const t = 150

const limited = timeLimit(fn, t)
limited(...inputs).then(console.log).catch(console.log)
