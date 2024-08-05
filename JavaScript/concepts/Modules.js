// * import and Export

// * Export function
export default function counter(a, b, c) {
	return a + b + c;
}

// * Import function
import { counter } from './Modules.js';

const result = counter(2, 3, 4);