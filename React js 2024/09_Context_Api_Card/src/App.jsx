import { useEffect, useState } from 'react';
import Card from './components/Card';
import { ThemeProvider } from './components/Context/theme';
import ThemeBtn from './components/ThemeBtn';

function App() {
	const [themeMode, setThemeMode] = useState('light');

	const lightTheme = () => {
		setThemeMode('light');
	};

	const darkTheme = () => {
		setThemeMode('dark');
	};

	useEffect(() => {
		const html = document.querySelector('html');
		html.classList.remove('light', 'dark');
		// * adding dark mode classes
		html.classList.add(themeMode);
	}, [themeMode]);

	return (
		<ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
			<div className="flex flex-wrap min-h-screen items-center">
				<div className="w-full">
					{/* Theme btn */}
					<div className="w-full max-w-sm mx-auto flex justify-end mb-4">
						<ThemeBtn />
					</div>
					{/* card */}
					<div className="w-full max-w-sm mx-auto">
						<Card />
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
