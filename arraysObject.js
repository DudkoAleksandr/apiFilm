const a = [1, 2, 5]
// const b = a
// b[1] = 5
// console.log (a, b)
const b = [...a]
b[1] = 6
console.log(a, b)