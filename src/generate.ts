export const generate = (length: number): string  => {
    let result = ""
    for (let i = 0; i < length; i++) {
        const random = Math.random()
        result += Math.round(random)
    }
    return result
};
