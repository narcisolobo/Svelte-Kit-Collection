<script lang="ts">
	import Advertisement from './advertisement.svelte';
	import Subcontent from './subcontent.svelte';
</script>

<main class="sk-main bg-red-500 p-5">
	<div class="flex justify-between gap-5">
		<Subcontent />
		<Subcontent />
		<Subcontent />
	</div>
	<Advertisement />
</main>

<style>
	.sk-main {
		flex: 3.5;
	}
</style>
