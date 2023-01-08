import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

function Router() {
	return (
		<HashRouter>
			<Routes>
				<Route
					path="/"
					exact
					element={<Home />}
				/>
			</Routes>
		</HashRouter>
	);
}

export default Router;
