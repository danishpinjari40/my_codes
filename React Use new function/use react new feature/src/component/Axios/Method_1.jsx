import axios from 'axios';
import { useState, useEffect } from 'react';
import "../../App.css"

const Method_1 = () => {
	//* State Management
	const [myData, setMyData] = useState([]);
	const [isError, setIsError] = useState('');

	//* Method 1 --> using Promises [ .then .catch]
	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((response) => setMyData(response.data))
			.catch((error) => setIsError(error.message));
	}, []);

	return (
		<>
			<h1>Axios Tutorial</h1>
			<h2>Method 1:- using Promises [ .then .catch]</h2>
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

export default Method_1;
