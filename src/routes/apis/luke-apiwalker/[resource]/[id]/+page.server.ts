import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
	const res = await fetch(`https://swapi.dev/api/${params.resource}/${params.id}`);
	if (!res.ok) {
		throw error(404, {
			message: "These are not the droids you're looking for.",
		});
	}
	const result = await res.json();
	return { result };
}
