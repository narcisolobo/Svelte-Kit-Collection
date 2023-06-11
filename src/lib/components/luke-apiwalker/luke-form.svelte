<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	let resource: string = $page.params.resource;
	let id: string = $page.params.id;

	function handleSubmit(e: SubmitEvent) {
		goto(`/apis/luke-apiwalker/${resource}/${id}`);
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div class="grid grid-cols-1 sm:grid-cols-[1fr_auto]">
		<div class="input-group-divider input-group col-auto grid-cols-[auto_1fr] rounded-none">
			<div class="input-group-shim">Search for:</div>
			<select class="select rounded-none text-slate-800 dark:text-slate-200" bind:value={resource}>
				<option value="people">People</option>
				<option value="planets">Planets</option>
			</select>
		</div>
		<div class="input-group-divider input-group col-span-1 grid-cols-[auto_1fr_auto] rounded-none">
			<div class="input-group-shim">ID:</div>
			<input
				type="number"
				placeholder="1"
				class="text-slate-800 dark:text-slate-200"
				bind:value={id} />
			<button type="submit" class="variant-filled-secondary">Submit</button>
		</div>
	</div>
</form>
