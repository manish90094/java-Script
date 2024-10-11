

function seyHello(){
    console.log("m")
    console.log("a")
    console.log("v")
    console.log("d")
    console.log("dm")
}

//seyHello()


function addNum(a  , b){
    return a+b
}

//console.log(addNum(2 , 3))


function logginUserMsg( username){
  if( !username){
    console.log("please enter valid user name")
    return 
  }
    return `${username} just log in`
}

//console.log(logginUserMsg("manish"))


/// 


// rest oprator (...)

function carPrice(...num1){
    return num1
}

//console.log(carPrice(200 ,838 ,834)) /// pass multiple valu


const user = {
    name : "manish",
    price : 199
}

function handelUser(anyObj){
    console.log(`User name is ${anyObj.name} price is ${anyObj.price}`)
}


//handelUser(user)

 
const myArr = [1,2,3,5,6]

function handelArr(anyArr){
    console.log(`this is an arr ${anyArr}`)
}

handelArr(myArr)

handelArr([1,2,3,4,5])
