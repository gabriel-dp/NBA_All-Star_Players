import { ThemeProvider } from 'styled-components';
import Router from './routes';

import darkTheme from './styles/darkTheme';
import GlobalStyle from './styles/globalStyle';

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyle />
			<Router />
		</ThemeProvider>
	);
}

export default App;
