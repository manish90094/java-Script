

//console.log("manish")

// const name = "manish"

// const age = 20

//console.log(name + age + "  ka ho gaya h")

// const a = '1276172'
// const b = '192912'

//console.log(a+b)


//console.log(`my name is ${name} and my age is ${name.charAt(3)}`);

// -----------------concat() ---------------

const a = "mansi"
const b = "singh"

// console.log(a.concat(" " , b))
// console.log(b.concat(", " , a))

// --------------endWith()---------------

const GameName = "game name is cricket"

//console.log(GameName.endsWith("cricket" , 20))

/// ------------------include()-----------

const game = "cricket"

//console.log(GameName.includes(game))

//const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

//console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`,);
// Expected output: "The word "fox" is in the sentence"


// -------------------indexof()---(find index given string ka)------------------

//const paragraph = "I think Ruth's dog is cuter than your dog!";

//const searchTerm = 'dog';
//const indexOfFirst = paragraph.indexOf(searchTerm);

//console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

// console.log(
//   `The index of the second "${searchTerm}" is ${paragraph.indexOf(
//     searchTerm,
//     indexOfFirst + 1,
//   )}`,
// );
// Expected output: "The index of the second "dog" is 38"

/////////-----------------lastindexOf()----(kisi bhi string ka last index batata h)---------------


//const paragraph = "I think Ruth's dog is cuter than your dog!";

//const searchTerm = 'dog';

//console.log(
//  `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
//);
// Expected output: "Index of the last "dog" is 38"



////////////////////  padEnd() -----------------------


//const str = "hqkwhk";

//console.log(str.padEnd(10 , '.'))


//const str1 = 'Breaded Mushrooms';

//console.log(str1.padEnd(25, '.'));


////////////////////  padStart() -----------------------

//console.log(str.padStart(10 , '.'))

//console.log(str1.padStart(25, '.'));

///////////////////////-------------repeat()--------------

const name = "love  "

//console.log(`manish i ${name.repeat( 20)} u`)

///////////--------------------------replace()----------

const paragraph = "I think Ruth's dog is cuter than your dog!";

//console.log(paragraph.replace("dog" , "cat"));


/////// ----------------  slice()-----------------

//const str = 'The quick brown fox jumps over the lazy dog.';

// console.log(str.slice(31));// index 31 se aage sare string print kar dega
// // Expected output: "the lazy dog."

// console.log(str.slice(4, 19));
// // Expected output: "quick brown fox"

// console.log(str.slice(-4));//pichhe se print karega
// // Expected output: "dog."

// console.log(str.slice(-9, -5));
// // Expected output: "lazy"



////////-----------------------split() -----------------------

//const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words);
console.log(words[4])
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]




//////////////////////////////////  subString() ------------------

const str = 'Mozilla';

console.log(str.substring(1, 3));
// Expected output: "oz"

console.log(str.substring(2));
// Expected output: "zilla"


/////-------------toLowerCase()------------

const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."


/////-----------------toString()------------------

//const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"


/////////------------------valueOf()----------------



const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.valueOf());
// Expected output: "foo"

