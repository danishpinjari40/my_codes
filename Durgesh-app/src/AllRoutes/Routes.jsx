import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { ProductPage } from '../Pages/ProductPage';
import { HomePage } from '../Pages/homePage';
import { SinglePageProduct } from '../Pages/SinglePageProduct';
//* danish added
import Cart from '../Pages/Cart';
import cartStore from '../Components/Danish Pinjari/store/store';

// import Cart from '../Pages/Cart'
// import cartStore from '../Components/Danish Pinjari/store/store';

import { Provider } from 'react-redux';

const AllRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/productLaptop" element={<ProductPage />}></Route>
				<Route path="/SinglePage" element={<SinglePageProduct />}></Route>
				<Route
					path="/cart"
					element={
						<Provider store={cartStore}>
							<Cart />
						</Provider>
					}
				></Route>
			</Routes>
		</div>
	);
};

export { AllRoutes };
