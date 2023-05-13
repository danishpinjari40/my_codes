import axios from 'axios';
import { useState, useEffect } from 'react';
import '../../App.css';


//* Method 2 --> Using Async Await

const API = `https://jsonplaceholder.typicode.com`

const Method_2 = () => {
	//* State Management
	const [myData, setMyData] = useState([]);
	const [isError, setIsError] = useState('');

	const getApiData = async (url) => {
		try {
			const res = await axios.get(url);
			setMyData(res.data);
		} catch (error) {
			setIsError(error.message);
		}
	};

	useEffect(() => {
		//* Method 2
		getApiData(`${API}/posts`);
	}, []);

	return (
		<>
			<h2>Method 2 :- Using Async Await [Try Catch]</h2>
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

export default Method_2;
