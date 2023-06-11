<script lang="ts">
	import { title } from '$lib/stores/title-store';
	import PersonCard from '$components/prop-it-up/person-card.svelte';
	import { people } from '$lib/data/people';
</script>

<svelte:head>
	<title>{$title} Prop it Up</title>
</svelte:head>

<section class="space-y-4 px-4 sm:container">
	<h2 class="h2">Prop It Up</h2>
	{#each people as person}
		<PersonCard {person} />
	{/each}
</section>
