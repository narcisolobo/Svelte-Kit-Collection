<script lang="ts">
	import { title } from '$lib/stores/title-store';
	import PersonCard from '$components/putting-it-together/person-card.svelte';
	import { people } from '$lib/data/people';
</script>

<svelte:head>
	<title>{$title} Putting it Together</title>
</svelte:head>

<div class="px-4 sm:container">
	<h1 class="mb-6 text-2xl font-semibold">Putting it Together</h1>
	{#each people as person}
		<PersonCard {person} />
	{/each}
</div>
