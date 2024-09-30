
// Creating date Obj

let date  =  new Date() // Creating a date 

// console.log(date.toString())


// // -----------------------------gateFullYear

// console.log(date.getFullYear())

// console.log(date.getDate())

// console.log(date.getDay())

// console.log(date.getHours())

// console.log(date.getMilliseconds())

// console.log(date.getUTCMinutes()) //Returns the minutes (0-59)

// console.log(date.getMonth()) // //  8 for September (because it's 0-indexed)

// console.log(date.getTime())

// console.log(date.getTimezoneOffset())


let specificDate = new Date(2024, 8, 30); // September 30, 2024 (Note: months are 0-indexed)
let fromString = new Date("2024-09-30"); // String format
let fromTimestamp = new Date(1609459200000); // Timestamp (milliseconds since Jan 1, 1970)


// console.log(specificDate)
// console.log(fromString)
// console.log(fromTimestamp)


// ----------------------------set

//date.setFullYear(2025)

//console.log(date)

//date.setDate(4)

console.log(date.getDate())






// ------------------------------


console.log(date.toISOString()) // return  a date as string format (YYYY-MM-DDTHH:mm:ss.sssZ)

console.log(date.toDateString()) 

console.log(date.toTimeString())
// importent
console.log(date.toLocaleDateString())


console.log(date.toLocaleTimeString())
 // importent
console.log(date.toString())