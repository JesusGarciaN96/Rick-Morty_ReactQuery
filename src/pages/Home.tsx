import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../constants/ROUTES';

export default function Home() {
	const navigate = useNavigate();

	return (
		<div style={{ width: '100%' }}>
			<h1 style={{ textAlign: 'center' }}>Welcome to Rick & Morty App</h1>
			<button onClick={() => navigate(ROUTES.CHARACTER)}>Character</button>
		</div>
	);
}
