import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './routes';
import { fetchGetData, allstarThemeJson } from './utils/GitHubAssets';

import defaultTheme from './styles/defaultTheme';
import GlobalStyle from './styles/globalStyle';

function App() {
	const [theme, setTheme] = useState(defaultTheme);
	useEffect(() => {
		fetchGetData(allstarThemeJson(), setTheme);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router />
		</ThemeProvider>
	);
}

export default App;
