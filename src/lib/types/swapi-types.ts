type Person = {
	name: string;
	mass: string;
	height: string;
	hairColor: string;
	skinColor: string;
	birthYear: string;
	gender: string;
	homeworld: string;
};

type Planet = {
	name: string;
	diameter: string;
	climate: string;
	terrain: string;
	surfaceWater: string;
	population: string;
};

export type { Person, Planet };
