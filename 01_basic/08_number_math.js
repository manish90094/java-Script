
const score = 400

const number = new Number(400)

// console.log(typeof score) // number
// console.log(typeof number) // obj

// console.log(score)
// console.log(number)

// console.log(score.toString().length)//number ko string me convert kar ke length find kar sakte h

// console.log(number.toFixed(2)) // jayada ecommerce me use hota h


const otherNum = 262.45533
// console.log(otherNum.toPrecision(4))//matlab (.) ke bad ketne num ki importence h

// const otherNumber = 10000000000

// console.log(otherNumber.toLocaleString()) // give US standerd value

// console.log(otherNumber.toLocaleString("en-in")) // // give indian standerd value



// ******************************* MATH *************************************************


console.log(Math.abs(-1)) 

console.log(Math.round(4.3))

console.log(Math.ceil(4.3))



console.log(Math.floor(4.9)) // chhoti value deta h

console.log(Math.min(2,4,5,8,9))

console.log(Math.max(4 ,5 ,3,8,0,7,7,9))

console.log(Math.random()) // [0 , 1] ke range me value aaayegi

console.log((Math.random()*10) + 1)

const mn = 10
const mx = 20

console.log(Math.floor((Math.random()*(mx - mn + 1) + mn)))