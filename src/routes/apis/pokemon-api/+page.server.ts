export async function load({ fetch }) {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281');
	const data = await res.json();

	interface IPoke {
		name: string;
		url: string;
	}

	const results: IPoke[] = data.results;

	return { results };
}
