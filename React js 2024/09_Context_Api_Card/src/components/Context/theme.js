import { useContext } from 'react';
import { createContext } from 'react';

// * getting theme data
export const ThemeContext = createContext({
	themeMode: 'light',
	darkTheme: () => {},
	lightTheme: () => {},
});

// * Provider
export const ThemeProvider = ThemeContext.Provider;

// * theme context using --> useContext and exporting
export default function useTheme() {
	return useContext(ThemeContext);
}
