import './App.css';
import { AllRoutes } from './AllRoutes/Routes';
import { Navbar } from './AllRoutes/Navbar';
import cartStore from './Components/Danish Pinjari/store/store';
import { Provider } from 'react-redux';

function App() {
	return (
		<div className="App">
			<Provider store={cartStore}>
				<Navbar />
			</Provider>
			<AllRoutes />
		</div>
	);
}

export default App;
