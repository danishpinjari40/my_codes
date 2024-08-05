const promiseOne = new Promise((resolve, reject) => {
	setTimeout(() => {
		// console.log(`Async task completed`);
		// * running resolve part
		resolve();
	}, 1000);
});

// * .then --> resolve
promiseOne.then(() => {
	// console.log("Promise resolved");
});

// * use of resolve and reject
const promiseTwo = new Promise((resolve, reject) => {
	setTimeout(() => {
		// * running resolve part
		resolve({ username: 'dany', email: 'dany@gmail.com' });
	}, 1000);
});
// * .then --> resolve
promiseTwo.then((user) => {
	// console.log(user); //* {username: "dany", email: "dany@gmail.com"}
});

// * use of resolve and reject
const promiseThree = new Promise((resolve, reject) => {
	let error = true;
	setTimeout(() => {
		if (!error) {
			// * running resolve part
			resolve({ username: 'dany', password: 'dany45' });
		} else {
			// * running reject part
			reject({ error: 'Error' });
		}
	}, 1000);
});
// * .then --> resolve
promiseThree
	.then((user) => {
		return user.username;
	})
	.then((username) => {
		console.log(username);
	})
	.catch((error) => {
		console.log(error.error);
	})
	.finally(() => {
		console.log(`promise has been either resolve or rejected`);
	});

// * 4 --> Async Await
const promiseFour = new Promise((resolve, reject) => {
	let error = false;
	setTimeout(() => {
		if (!error) {
			// * running resolve part
			resolve({ username: 'danish', password: '123' });
		} else {
			// * running reject part
			reject('error: Error');
		}
	}, 1000);
});

async function consumePromiseFour() {
	try {
		const response = await promiseFour;
		console.log('response:', response);
	} catch (error) {
		console.log('error:', error);
	}
}
consumePromiseFour();

// * Fetch data

async function getAllUser() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(`Error`);
	}
}
// getAllUser()

// * .then .catch
fetch('https://jsonplaceholder.typicode.com/users')
	.then((res) => {
		return res.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => console.log(`error`));
