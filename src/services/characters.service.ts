import { API_RAM } from '../constants/API';

export const getAllCharacters = async () => (await fetch(`${API_RAM}/character`)).json();
