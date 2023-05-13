
//* cache --> for Managing Re-render of an Api
//* Calling Api --> getting Data load only 1 time.

import { cache } from 'react';

export const cachefunction = cache(async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	return await res.json();
});
