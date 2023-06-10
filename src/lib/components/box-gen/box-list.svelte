<script lang="ts">
	import BoxItem from './box-item.svelte';
	import { boxes } from '$lib/stores/box-store';

	let total: number;
	$: total = $boxes.length;
</script>

<div class="card mt-4 p-4">
	Total: {total}
	<div class="flex flex-wrap gap-2">
		{#each $boxes as box (box.id)}
			<BoxItem {box} />
		{/each}
	</div>
</div>
