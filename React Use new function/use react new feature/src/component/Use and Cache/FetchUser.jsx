//* {Use} for Fetching Api data in less line of code

import { use } from 'react';
import { cachefunction } from './Cache';

const FetchUser = () => {
	//* Getting all Api Data
	const data = use(cachefunction());

	return (
		<>
			{data.map((elem) => {
				return (
					<div key={elem.id}>
						<p>
							{elem.id} {elem.name}
						</p>
					</div>
				);
			})}
		</>
	);
};

export default FetchUser;
