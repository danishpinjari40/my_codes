import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from './Appwrite/auth';
import { Login, logout } from './store/authSlice';
import { Header, Footer } from './components';

function App() {
	const [loading, setLoading] = useState(true);

	// * Redux using here
	const dispatch = useDispatch();

	// * checking login logout
	useEffect(() => {
		authService
			.getCurrentUser()
			.then((userData) => {
				if (userData) {
					dispatch(Login(userData));
				} else {
					dispatch(logout());
				}
			})
			.finally(() => setLoading(false));
	}, []);

	return !loading ? (
		<>
			<div
				className="min-h-screen flex flex-wrap
      content-between bg-gray-500 
      
      "
			>
				<div className="w-full block justify-center">
					<h1 className="text-3xl font-bold text-white">Welcome to Appwrite</h1>
					<Header />
					<Footer />
					<main>TODO: {/* Outlet */}</main>
				</div>
			</div>
		</>
	) : null;
}

export default App;
