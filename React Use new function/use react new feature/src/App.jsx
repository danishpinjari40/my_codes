import { Suspense } from 'react';
import './App.css';
// import FetchUser from './component/Use and Cache/FetchUser';
// import Method_2 from './component/Axios/Method_2';
// import Method_1 from './component/Axios/Method_1';
import Method_3 from './component/Axios/Method_3';

const App = () => {
	return (
		<>
			<Suspense fallback={<p>Loading...</p>}>
				{/* <FetchUser /> */}
			</Suspense>
			
			{/* <Method_1 /> */}
			{/* <Method_2 /> */}
			<Method_3 />
		</>
	);
};

export default App;
