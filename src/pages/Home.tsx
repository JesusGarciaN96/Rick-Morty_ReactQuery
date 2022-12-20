import { ROUTES } from '../constants/ROUTES';

export default function Home() {
	return (
		<>
			<h1>Welcome to Rick & Morty App</h1>
			<a href={ROUTES.CHARACTER}>Character</a>
		</>
	);
}
