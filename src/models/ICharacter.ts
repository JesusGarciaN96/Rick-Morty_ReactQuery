export interface ICharacter {
	info: ICharacterInfo;
	results: ICharacterResult[];
}

export interface ICharacterInfo {
	count: number;
	pages: number;
	next: string;
	prev: boolean;
}

export interface ICharacterResult {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	image: string;
}
