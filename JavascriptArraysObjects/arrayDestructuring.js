const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1','2','3','4','5','6']

// old way of getting first 2 element
// const a = alphabet[0]
// const b = alphabet[1]


// new way of getting first 2 element
// const [a,b] = alphabet
// console.log(a)
// console.log(b)


// getting first and third element
// const [a,,c] = alphabet
// console.log(a)
// console.log(c)


// getting first and third element and the rest
// const [a,,c, ...rest] = alphabet
// console.log(a)
// console.log(c)
// console.log(rest)


// combining 2 array
// const newArray = [...alphabet, ...numbers]
// console.log(newArray)

function sumAndMultiply(a,b){
    return [a+b, a*b]
}

// save multiple returned value in an array
// const addAndMultiply = sumAndMultiply(2,3)
// console.log(addAndMultiply)

// save multiple returned values to a destructured array.
// const [sum,multiply] = sumAndMultiply(2,3)
// console.log(sum,multiply)

// save multiple returned values to a destructured array with default value 
// const [sum, multiply, division = 'No division'] = sumAndMultiply(2,3)
// console.log(sum, multiply, division)

function sumAndMultiplyAndDivide(a,b){
    return [a+b,a*b, a/b]
}

// save multiple returned values to a destructured array with default value 
const [sum, multiply, division = 'No division'] = sumAndMultiplyAndDivide(2,3)
console.log(sum, multiply, division)