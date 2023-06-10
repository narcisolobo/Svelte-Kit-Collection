<script lang="ts">
	import { title } from '$lib/stores/title-store';
</script>

<svelte:head>
	<title>{$title} Todo List</title>
</svelte:head>

<div class="px-4 sm:container">
	<h1 class="mb-6 text-2xl font-semibold">Todo List</h1>
</div>
