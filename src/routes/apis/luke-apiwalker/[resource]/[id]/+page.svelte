<script lang="ts">
	import LukeForm from '$components/luke-apiwalker/luke-form.svelte';
	import LukePerson from '$components/luke-apiwalker/luke-person.svelte';
	import { title } from '$lib/stores/title-store';
	import type { Person, Planet } from '$lib/types/swapi-types';
	import type { PageData } from './$types';
	import { navigating, page } from '$app/stores';
	import LukeLoader from '$components/luke-apiwalker/luke-loader.svelte';
	import LukePlanet from '$components/luke-apiwalker/luke-planet.svelte';

	export let data: PageData;

	let person: Person;
	let planet: Planet;

	$: person = {
		name: $page.params.resource === 'people' ? data.result.name : '',
		mass: $page.params.resource === 'people' ? data.result.mass : '',
		height: $page.params.resource === 'people' ? data.result.height : '',
		hairColor: $page.params.resource === 'people' ? data.result.hair_color : '',
		skinColor: $page.params.resource === 'people' ? data.result.skin_color : '',
		birthYear: $page.params.resource === 'people' ? data.result.birth_year : '',
		gender: $page.params.resource === 'people' ? data.result.gender : '',
		homeworld: $page.params.resource === 'people' ? data.result.homeworld : '',
	};

	$: planet = {
		name: $page.params.resource === 'planets' ? data.result.name : '',
		diameter: $page.params.resource === 'planets' ? data.result.diameter : '',
		climate: $page.params.resource === 'planets' ? data.result.climate : '',
		terrain: $page.params.resource === 'planets' ? data.result.terrain : '',
		surfaceWater: $page.params.resource === 'planets' ? data.result.surface_water : '',
		population: $page.params.resource === 'planets' ? data.result.population : '',
	};
</script>

<svelte:head>
	<title>{$title} Luke APIWalker</title>
</svelte:head>

<section class="space-y-4 px-4 sm:container">
	<h2 class="h2">Luke APIWalker</h2>
	<div class="variant-gradient-primary-secondary h-96 bg-gradient-to-br shadow">
		<LukeForm />
		{#if $navigating}
			<LukeLoader />
		{:else if $page.params.resource === 'people'}
			<LukePerson {person} />
		{:else if $page.params.resource === 'planets'}
			<LukePlanet {planet} />
		{/if}
	</div>
</section>
