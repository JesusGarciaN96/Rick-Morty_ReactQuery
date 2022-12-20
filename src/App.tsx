import { Route, Routes } from 'react-router-dom';

import { ROUTES } from './constants/ROUTES';
import CharacterPage from './pages/Character';
import HomePage from './pages/Home';

function App() {
	return (
		<>
			<Routes>
				<Route path={ROUTES.ROOT} element={<HomePage />} />
				<Route path={ROUTES.CHARACTER} element={<CharacterPage />} />
			</Routes>
		</>
	);
}

export default App;
