import { useState } from 'react';

import './App.css';

function App() {
	// * UseState
	const [count, setCount] = useState(0);

	const addValue = () => {
		setCount(count + 1);
	};

	const removeValue = () => {
    if(count === 0){
      alert("No more values to remove")
    }else{
      setCount(count - 1);
    }
	};

	return (
		<>
			<h1>Dany ka code</h1>
			<h2>Counter Value {count}</h2>
			<button onClick={addValue}>Value Increase</button>
			<button onClick={removeValue}>Value Decrease</button>
		</>
	);
}

export default App;
