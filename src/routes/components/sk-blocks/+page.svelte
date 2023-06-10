<script lang="ts">
	import Header from '$components/sk-blocks/header.svelte';
	import Container from '$components/sk-blocks/container.svelte';
	import Main from '$components/sk-blocks/main.svelte';
	import Navigation from '$components/sk-blocks/navigation.svelte';
	import { title } from '$lib/stores/title-store';
</script>

<svelte:head>
	<title>{$title} SK Blocks</title>
</svelte:head>

<div class="px-4 sm:container">
	<h1 class="mb-6 text-center text-2xl font-semibold">SvelteKit Blocks</h1>
	<Container>
		<Header />
		<div class="flex items-start justify-between gap-5">
			<Navigation />
			<Main />
		</div>
	</Container>
</div>
