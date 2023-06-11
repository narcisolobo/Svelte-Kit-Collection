<script lang="ts">
	import type { Person } from '$lib/types/swapi-types';
	export let person: Person;
</script>

{#if person}
	<div class="card card-hover variant-glass-primary m-4 sm:w-5/6 md:w-3/4 lg:w-1/2">
		<header class="card-header"><h3 class="h3">{person.name}</h3></header>
		<section class="grid grid-cols-2 p-4">
			<strong>Mass:</strong>
			<p>{person.mass}</p>
			<strong>Height:</strong>
			<p>{person.height}</p>
			<strong>Hair Color:</strong>
			<p>{person.hairColor}</p>
			<strong>Skin Color:</strong>
			<p>{person.skinColor}</p>
			<strong>Birth Year:</strong>
			<p>{person.birthYear}</p>
			<strong>Gender:</strong>
			<p>{person.gender}</p>
			<strong class="col-span-2">Homeworld:</strong>
			<p>{person.homeworld}</p>
		</section>
	</div>
{/if}
<!-- content here -->
