// * object literals
// * . & [] data access in object
// * symbol datatype
const mySym = Symbol('key1');
// * interview question --> print symbol from obj
const user = {
	name: 'John',
	[mySym]: 'mykey1',
	age: 30,
	location: 'jalgaon',
	email: 'dany40@gmail.com',
	isLoggedIn: false,
	lastLoginDays: ['monday', 'saturday'],
};
// * print email
// console.log(user.email);
// console.log(user["email"]);

// * print symbols
// console.log(user[mySym]);
// console.log(typeof user[mySym]);

// * change object value
// user.name = 'Dany';
// * freeze object update
// Object.freeze(user)

user.name = 'danish';
// console.log(user);

// * add object in function
user.greeting = function () {
	// * `` --> string interspersion
	// console.log(`Hello ${this.name}!`);
};

// console.log(user.greeting());

// * object define
// * 1st Method
const user2 = new Object();
// * 2nd method
const objUser = {};

objUser.id = '123abc';
objUser.location = 'jalgaon';
objUser.name = 'danish';
objUser.age = 30;
objUser.email = 'dany40@gmail.com';
objUser.isLoggedIn = false;

// * nesting in the object
const regUser = {
	email: 'deep40mail.com',
	fullname: {
		userfullname: {
			firstname: 'deep',
            lastname: "pindari",
		},
	},
};

// * Access this values
// * when value exist or not --> fullname?
// console.log(regUser.fullname.userfullname.firstname);

const obj1 = {1: 'a', 2:"b"}
const obj2 = {3: 'a', 4:"b"}

// * merge 2 object
const obj3 = Object.assign({},obj1, obj2)
// console.log('obj3:', obj3)

// * sprade operator --> Most use
const obj4 = {...obj1, ...obj2}
// console.log('obj4:', obj4)

// * key and value print of Obj --> Array form
// console.log(objUser);
// console.log(Object.keys(objUser));
// console.log(Object.values(objUser));

// * property check --> present in obj --> in True/false --> boolean form
// console.log(objUser.hasOwnProperty("isLoggedIn"));

// * object De-Structuring 

const course = {
    name: 'Web Development',
    courseInstructor: 'Danish',
    price: 200,
}
// * after de-structure
const {courseInstructor: instructor} = course;

console.log(instructor);
