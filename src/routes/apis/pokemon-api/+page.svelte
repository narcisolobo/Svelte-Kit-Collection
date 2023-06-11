<script lang="ts">
	import { title } from '$lib/stores/title-store';
	import type { PageData } from './$types';
	import { Paginator, Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';

	export let data: PageData;
	let page = {
		offset: 0,
		limit: 10,
		size: 0,
		amounts: [5, 10, 15],
	};

	interface IPoke {
		name: string;
		url: string;
	}

	let paginatedSource: IPoke[] = [];
	let pokeTable: TableSource;

	$: {
		if (data) {
			const source = data.results;

			page.size = source.length;
			paginatedSource = source.slice(
				page.offset * page.limit, // start
				page.offset * page.limit + page.limit // end
			);

			pokeTable = {
				head: ['Name', 'URL'],
				body: tableMapperValues(paginatedSource, ['name', 'url']),
			};
		}
	}
</script>

<svelte:head>
	<title>{$title} Pokémon API</title>
</svelte:head>

<section class="space-y-4 px-4 sm:container">
	<h2 class="h2">Pokémon API</h2>
	{#if data}
		<Table source={pokeTable} />
		<Paginator bind:settings={page} showFirstLastButtons={true} showPreviousNextButtons={true} />
	{/if}
</section>
