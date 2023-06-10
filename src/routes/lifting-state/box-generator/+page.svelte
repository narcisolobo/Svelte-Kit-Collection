<script lang="ts">
	import BoxList from '$components/box-gen/box-list.svelte';
	import { title } from '$lib/stores/title-store';
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { boxes } from '$lib/stores/box-store';

	export let data: PageData;
	let total: number;

	const {
		form: boxForm,
		errors,
		enhance,
	} = superForm(data.boxForm, {
		resetForm: true,
	});

	$: boxes.set(data.boxes);
	$: total = $boxes.length;
</script>

<svelte:head>
	<title>{$title} Box Generator</title>
</svelte:head>

<div class="px-4 sm:container">
	<h1 class="mb-6 text-2xl font-semibold">Box Generator Total: {total}</h1>
	<SuperDebug data={$boxForm} display={false} />
	<div class="flex flex-col gap-4 md:grid md:grid-cols-2 md:items-start">
		<div class="card mt-4 p-4">
			{#if $errors.color || $errors.width}
				<div class="mb-2">
					{#if $errors.color}
						<span class="text-sm text-error-400">{$errors.color}</span>
					{/if}
					{#if $errors.width}
						<span class="text-sm text-error-400">{$errors.width}</span>
					{/if}
				</div>
			{/if}
			<form method="POST" use:enhance>
				<div class="grid grid-cols-[auto_1fr_auto] items-center gap-2">
					<input
						class="input"
						type="color"
						name="color"
						id="color"
						data-invalid={$errors.color}
						bind:value={$boxForm.color} />
					<input type="text" name="color" id="color" class="input" readonly tabindex="-1" />
					<div class="input-group-divider input-group grid-cols-[auto_1fr_auto]">
						<div class="input-group-shim">width:</div>
						<input
							type="number"
							name="width"
							id="width"
							data-invalid={$errors.width}
							bind:value={$boxForm.width} />
						<button type="submit" class="variant-filled-secondary">Submit</button>
					</div>
				</div>
			</form>
		</div>
		{#if boxes}
			<BoxList />
		{/if}
	</div>
</div>
