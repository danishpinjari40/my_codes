//* Array Methods

const myArr = [1, 2, 3, 4, 5];

// * push --> add element in last
// myArr.push(6);
// * pop  --> remove element in last
// myArr.pop();

// * shift --> remove 1st element
// myArr.shift();

// * unshift --> add element in 1st position
// myArr.unshift(0);

// * includes --> check value exist
// console.log(myArr.includes(6));
// * indexOf --> check index value
// console.log(myArr.indexOf(1));

// * join --> after join it will be in --> string
// console.log(myArr.join());

// * slice, splice
// * slice --> index --> 1,2 --> slice(1,3)
// console.log(myArr.slice(1, 3));
// * splice --> manipulate original array
// myArr.splice(1, 2,);

// * Slice vs Splice

// console.log("A ", myArr);
// * slice
// const myn1 = myArr.slice(1,3)
// console.log('Slice:', myn1)
// console.log("B ", myArr);

// const myn2 = myArr.splice(1,3)
// console.log("C ", myArr);
// console.log('splice:', myn2)

// * Array lecture --> 2

const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "Batman", "Flash"]

// * push --> all in only 1 array
// * concat --> created new separate array

// const allHeros = marvel.concat(dc)
// console.log(allHeros);

// * we use Spread operator
const allHeroes = [...marvel,...dc]
// console.log(allHeroes);

// * for joint --> Nested Array
const antArr = [1,2,3,[4,5,6],7,8,[9,[10,11]]]

const resultArr = antArr.flat(Infinity)
// console.log('resultArr:', resultArr)

// * isArray
// console.log(Array.isArray("dany"));

// * Array.from --> creating new Array
const myfrom = Array.from("dany");
// console.log('myfrom:', myfrom)

console.log(Array.from({name: "dany"})); //* Interesting --> []

// * using   --> .of    --> Array.of(value, value,value)
let sc1 = 100;
let sc2 = 100;
let sc3 = 200;

const score = Array.of(sc1, sc2, sc3)
console.log('score:', score)






