<script lang="ts">
	import type { IBox } from '$lib/types/ibox-type';
	export let box: IBox;
</script>

<div
	class="box rounded p-4"
	style="width: {box.width}px; height: {box.width}px; background-color: {box.color};">
	<p>{box.width}px {box.color}</p>
</div>
