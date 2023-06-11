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

<section class="space-y-4 px-4 sm:container">
	<h2 class="h2">SvelteKit Blocks</h2>
	<Container>
		<Header />
		<div class="flex items-start justify-between gap-5">
			<Navigation />
			<Main />
		</div>
	</Container>
</section>
