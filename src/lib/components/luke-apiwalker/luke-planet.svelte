<script lang="ts">
	import type { Planet } from '$lib/types/swapi-types';
	export let planet: Planet;
</script>

{#if planet}
	<div class="card card-hover variant-glass-primary m-4 sm:w-5/6 md:w-3/4 lg:w-1/2">
		<header class="card-header"><h3 class="h3">{planet.name}</h3></header>
		<section class="grid grid-cols-2 p-4">
			<strong>Population:</strong>
			<p>{planet.population}</p>
			<strong>Diameter:</strong>
			<p>{planet.diameter}</p>
			<strong>Climate:</strong>
			<p>{planet.climate}</p>
			<strong>Terrain:</strong>
			<p>{planet.terrain}</p>
			<strong>Surface Water:</strong>
			<p>{planet.surfaceWater}</p>
		</section>
	</div>
{/if}
<!-- content here -->
