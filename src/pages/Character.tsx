import { useQuery, QueryClient, QueryClientProvider } from 'react-query';

import { ICharacterResult } from '../models/ICharacter';
import { getAllCharacters } from '../services/characters.service';

const rmClientQuery = new QueryClient();

export default function Character() {
	//i Primera parámetros una key, segundo una función asincrona (puedes ser llamada fetch, promesa, etc)
	const { data, status } = useQuery('getCharacters', getAllCharacters);

	return (
		<QueryClientProvider client={rmClientQuery}>
			<div
				style={{
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-around',
					flexWrap: 'wrap',
				}}
			>
				{data.results.map((character: ICharacterResult) => (
					<div key={character.id} style={{ margin: '30px 10px' }}>
						<img
							style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '15px' }}
							src={character.image}
							alt="Avatar"
						/>
						&nbsp;&nbsp;
						<h3 style={{ margin: '10px 0', textAlign: 'center' }}>{character.name}</h3>
					</div>
				))}
			</div>
		</QueryClientProvider>
	);
}
