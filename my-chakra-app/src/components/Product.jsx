import React from 'react';

import {
	Box,
	Image,
	Heading,
	Text,
	Link,
	Flex,
	Button,
} from '@chakra-ui/react';
import { useState } from 'react';

const ProductPage = ({ productData }) => {
	// const {
	// 	id,
	// 	categories,
	// 	title,
	// 	price,
	// 	realPrice,
	// 	brand,
	// 	description,
	// 	color,
	// 	discount,
	// 	rating,
	// 	reviews,
	// 	Images,
	// } = productData;
	// console.log('productData:', productData)

	// Declare a state variable to store the cart items
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (productId) => {
		// Check if the product is already in the cart
		const existingItem = cartItems.find((item) => item.id === productId);
		if (existingItem) {
			// If the product is already in the cart, increment the quantity
			setCartItems(
				cartItems.map((item) =>
					item.id === productId
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			);
		} else {
			// If the product is not in the cart, add it with a quantity of 1
			setCartItems([...cartItems, { id: productId, quantity: 1 }]);
		}
	};
	return (
		<Box>
			{/* Display the product images */}
			<Flex>
				{productData.Images.map((Images, index) => (
					<Box key={index}>
						<Image src={Images.imageFront} alt={productData.title} />
					</Box>
				))}
			</Flex>

			{/* Display the product information */}
			<Box p={4}>
				<Heading as="h1" size="lg">
					{productData.title}
				</Heading>
				<Text fontSize="xl" fontWeight="bold" color="green.500">
					${productData.price}
				</Text>
				<Text fontSize="sm" color="gray.500">
					{productData.realPrice}
				</Text>
				<Text mt={4}>{productData.description}</Text>
				<Text mt={4} fontWeight="bold">
					Features:
				</Text>
				<Text mt={2}>Brand: {productData.brand}</Text>
				<Text mt={2}>Color: {productData.color}</Text>
				<Text mt={2}>Discount: {productData.discount}</Text>
				<Text mt={2}>Rating: {productData.rating}</Text>

				{/* Display the reviews */}
				<Box mt={4}>
					<Heading as="h3" size="md">
						Reviews:
					</Heading>
					{productData.reviews.map((review, index) => (
						<Text key={index} mt={2}>
							{review}
						</Text>
					))}
				</Box>

				{/* Add a button to add the product to the cart */}
				<Button
					mt={4}
					variantColor="green"
					onClick={() => addToCart(productData.id)}
				>
					Add to Cart
				</Button>
			</Box>
		</Box>
	);
};

export default ProductPage;
