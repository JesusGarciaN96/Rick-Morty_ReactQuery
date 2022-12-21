import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from './constants/ROUTES';
import CharacterPage from './pages/Character';
import HomePage from './pages/Home';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Routes>
				<Route path={ROUTES.ROOT} element={<HomePage />} />
				<Route path={ROUTES.CHARACTER} element={<CharacterPage />} />
			</Routes>
		</QueryClientProvider>
	);
}

export default App;
