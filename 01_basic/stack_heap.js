
// Stack (Primitive) , Heap ( None Primitive)
//  stack me hamesa coppy hhi milta h 
// heap me hamesha refrence milta h
let myfaverateColor = "black"

let anotherColor  = myfaverateColor

anotherColor = "white" 
 
// console.log(myfaverateColor)

// console.log(anotherColor)


 let userOne = {
     name :" manish",
     id : "298912",
}


let userTwo = userOne

// matlab userTwo me changes karne se userOne me changes ho jate h yahi heap h

userTwo.name = "sandeep"

console.log(userOne.name)

console.log(userTwo.name)