const myNumbs = [1, 2, 3];

// * reduce --> initial value --> 0
// * Method - 1
const myTotal = myNumbs.reduce(function (acc, currval) {
	// console.log(`acc: ${acc} and currval: ${currval}`);
	return acc + currval;
}, 0);

// console.log('myTotal:', myTotal)
// * Method - 2
// * Arrow Function
const myTotal2 = myNumbs.reduce((acc, curvle) => acc + curvle, 0);
// console.log('myTotal2:', myTotal2)

const shopCart = [
	{
		item: 'javascript',
		price: 1500,
	},
    {
		item: 'css',
		price: 2000,
	},
    {
		item: 'data science',
		price: 3000,
	},
    {
		item: 'html',
		price: 4000,
	},
];

const cartItem = shopCart.reduce((acc, item) => acc + item.price, 0)
console.log('cartItem:', cartItem)