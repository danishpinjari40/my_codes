// import React from 'react';
// import { useSelector } from 'react-redux';

// const Cart = () => {
// 	const products = useSelector((state) => state.cart);
// 	console.log('products:', products.Images)

// 	return (
// 		<div>
// 			<h1>Cart</h1>
// 			<div className="cartsection">
// 			{products.map((product) => (
// 					<div className="cartCard">
// 						<img src={product.Images[0].imageFront} alt="product_image" />
// 						<h5>{product.name}</h5>
// 						<h5>{product.price.toFixed(2)}</h5>
// 						<button>Remove</button>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default Cart;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Card, Image, Heading, Button, Text, Box } from '@chakra-ui/react';

// const Cart = () => {
// 	const products = useSelector((state) => state.cart);
// 	console.log('products:', products.Images);

// 	return (
// 		<Box>
// 			<Heading as="h1" color="yellow.500">
// 				Cart
// 			</Heading>
// 			<Box display="flex" flexWrap="wrap">
// 				{products.map((product) => (
// 					<Card
// 						key={product.name}
// 						maxW="sm"
// 						m="1rem"
// 						p="1rem"
// 						borderWidth="1px"
// 						rounded="lg"
// 						overflow="hidden"
// 					>
// 						<Image src={product.Images[0].imageFront} alt="product_image"
// 						width='50%'
// 						margin='auto'
// 						/>
// 						<Box p="1rem">
// 							<Heading as="h4" size="ld" color="blue.600"
// 							border='1px solid red'
// 							>
// 								{product.title}
// 							</Heading>
// 							<Text fontSize="md" color="red.800"
// 							fontWeight='700'
// 							bg='yellow'
// 							width='25%'
// 							display='flex'
// 							margin='auto'
// 							borderRadius='20px'
// 							marginTop='10px'
// 							>
// 								${product.price.toFixed(2)}
// 							</Text>
// 						</Box>
// 						<Button variantColor="yellow" mt="1rem"
// 						width='30%'
// 						margin='auto'
// 						>
// 							Remove
// 						</Button>
// 					</Card>
// 				))}
// 			</Box>
// 		</Box>
// 	);
// };

// export default Cart;

//* @CSS
import {
	Badge,
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Icon,
	Image,
	SimpleGrid,
	Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

//* Currency formatter
import { formatCurrency } from '../utilities/formatCurrency';
import { AiFillStar } from 'react-icons/ai';

// * Redux
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Components/Danish Pinjari/store/cartSlice';
import CartAmountToggle from '../Components/Danish Pinjari/CartAmountToggle';
//* redux & redux actions
// import { useDispatch, useSelector } from 'react-redux';
// import { decreaseCartQuantity, deleteAllFromCart, increaseCartQuantity, removeDataFromCart } from '../Redux/action';

const CartItem = () => {
	const dispatch = useDispatch();
	
	const products = useSelector((state) => state.cart);

	//* remove
	const handleRemove = (productId) => {
		dispatch(remove(productId));
	};

	//* increasing and decrease
	const [amount, setAmount] = useState(1);

	const setDecrease = () => {
		amount > 1 ? setAmount(amount - 1) : setAmount(1);
	};
	const setIncrease = () => {
		amount < 10 ? setAmount(amount + 1) : setAmount(15);
	};

	return (
		<Container maxW="container.xl">
			<Text fontSize={'4xl'}>Cart</Text>

			<SimpleGrid columns={[1, 2, 3, 4]} spacing="40px" pt="10">
				{products &&
					products.map((item) => (
						<Box
							key={item.id}
							borderWidth="1px"
							borderRadius="lg"
							overflow="hidden"
						>
							<Image
								src={item.Images[0].imageFront}
								alt={item.categories}
								h="200px"
								w="full"
								p="2"
								objectFit="contain"
							/>

							<Box p="6">
								<Box display="flex" alignItems="baseline">
									<Badge borderRadius="full" px="2" colorScheme="teal">
										Category
									</Badge>

									<Box
										color="gray.500"
										fontWeight="semibold"
										letterSpacing="wide"
										fontSize="xs"
										textTransform="uppercase"
										ml="2"
									>
										{item.categories}
									</Box>
								</Box>

								<Box
									mt="1"
									fontWeight="semibold"
									as="h4"
									lineHeight="tight"
									noOfLines={1}
								>
									{item.title}
								</Box>

								<Box as="h1" color="green.600" fontWeight="bold">
									{formatCurrency(item.price)}
								</Box>

								<Box
									display="flex"
									mt="2"
									justifyContent="center"
									alignItems="center"
								>
									{Array(5)
										.fill('')
										.map((_, i) => (
											<Icon
												as={AiFillStar}
												key={i}
												color={i < item.rating ? 'teal.500' : 'gray.300'}
											/>
										))}
									<Box as="span" ml="2" color="gray.600" fontSize="sm">
										{item.rating.count} reviews
									</Box>
								</Box>

								{/* <Flex justify='center' align='center' mt={ 5 }>

                                <Button w='container.sm' bg='blue.600' color='white' _hover={ { color: 'blue.500', bg: "white", border: '1px solid blue' } } m='2' disabled={ item.quantity === 1 } onClick={ () => dispatch(decreaseCartQuantity(item.id)) }>-</Button>

                                <Text fontSize='3xl' m='2'>{ item.quantity }</Text>

                                <Button w='container.sm' bg='blue.600' color='white' _hover={ { width:"30%",color: 'blue.500', bg: "white", border: '1px solid blue' } } onClick={ () => dispatch(increaseCartQuantity(item.id)) } m='2'>+</Button>

                            </Flex> */}

								{/* amount toggle */}
								<CartAmountToggle
									amount={amount}
									setDecrease={setDecrease}
									setIncrease={setIncrease}
								/>

								<Button
									w="50%"
									bg="red.500"
									color="white"
									_hover={{
										width: '50%',
										color: 'red',
										bg: 'white',
										border: '1px solid red',
									}}
									m="2"
									onClick={() => handleRemove(item.id)}
								>
									Remove
								</Button>
							</Box>
						</Box>
					))}
			</SimpleGrid>
		</Container>
	);
};

export default CartItem;
