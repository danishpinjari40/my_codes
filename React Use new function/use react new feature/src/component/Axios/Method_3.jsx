import { useState, useEffect } from 'react';
import '../../App.css';
import axios from './axios';
// import API from './axios';

//* Method 3 --> Using Separate Axios Component

const Method_3 = () => {
	//* State Management
	const [myData, setMyData] = useState([]);
	const [isError, setIsError] = useState('');

	const getApiData = async () => {
		try {
			const res = await axios.get('/posts');
			setMyData(res.data);
		} catch (error) {
			setIsError(error.message);
		}
	};

	useEffect(() => {
		//* Method 3
		getApiData();
	}, []);

	return (
		<>
			<h2>Method 3 :- Using Separate Axios Component</h2>
			{/* For Error handling */}
			{isError !== '' && <h2>{isError}</h2>}

			<div className="grid">
				{myData.slice(0, 9).map((post) => {
					const { body, id, title } = post;
					return (
						<div key={id} className="card">
							<h2>{title.slice(0, 15).toUpperCase()}</h2>
							<p>{body.slice(0, 100)}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Method_3;
