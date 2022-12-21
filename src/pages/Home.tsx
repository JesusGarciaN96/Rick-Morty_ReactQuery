import { ROUTES } from '../constants/ROUTES';

export default function Home() {
	return (
		<div style={{ width: '100%' }}>
			<h1 style={{ textAlign: 'center' }}>Welcome to Rick & Morty App</h1>
			<a style={{ textAlign: 'center', color: 'white' }} href={ROUTES.CHARACTER}>
				Character
			</a>
		</div>
	);
}
