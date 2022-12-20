import { API_RAM } from '../constants/API';

export const getAllCharacters = async () => {
	try {
		return await (await fetch(`${API_RAM}/character`)).json();
	} catch (ex) {
		throw ex;
	}
};
