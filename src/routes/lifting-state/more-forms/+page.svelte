<script lang="ts">
	import { title } from '$lib/stores/title-store';
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	export let data: PageData;

	// Client API:
	const { form, errors, enhance } = superForm(data.form, {
		applyAction: true,
		invalidateAll: true,
		resetForm: true,
		taintedMessage: 'Do you want to leave this page? Changes you made may not be saved.',
	});
</script>

<svelte:head>
	<title>{$title} More Forms</title>
</svelte:head>

<div class="space-y-4 px-4 sm:container">
	<h2 class="h2">More Forms</h2>
	<div class="card mx-4 p-4 sm:w-5/6 md:w-3/4 lg:w-1/2">
		<form method="POST" use:enhance>
			<div class="mb-4">
				<label for="firstName" class="label mb-1 text-sm">First Name:</label>
				<input
					type="text"
					name="firstName"
					id="firstName"
					class="input"
					bind:value={$form.firstName} />
				{#if $errors.firstName}
					<span class="text-sm text-error-400">{$errors.firstName}</span>
				{/if}
			</div>
			<div class="mb-4">
				<label for="lastName" class="label mb-1 text-sm">Last Name:</label>
				<input
					type="text"
					name="lastName"
					id="lastName"
					class="input"
					bind:value={$form.lastName} />
				{#if $errors.lastName}
					<span class="text-sm text-error-400">{$errors.lastName}</span>
				{/if}
			</div>
			<div class="mb-4">
				<label for="email" class="label mb-1 text-sm">Email:</label>
				<input type="text" name="email" id="email" class="input" bind:value={$form.email} />

				{#if $errors.email}
					<span class="text-sm text-error-400">{$errors.email}</span>
				{/if}
			</div>
			<div class="mb-4">
				<label for="password" class="label mb-1 text-sm">Password:</label>
				<input
					type="password"
					name="password"
					id="password"
					class="input"
					bind:value={$form.password} />
				{#if $errors.password}
					<span class="text-sm text-error-400">{$errors.password}</span>
				{/if}
			</div>
			<div class="mb-4">
				<label for="confirmPassword" class="label mb-1 text-sm">Confirm Password:</label>
				<input
					type="password"
					name="confirmPassword"
					id="confirmPassword"
					class="input"
					bind:value={$form.confirmPassword} />
				{#if $errors.confirmPassword}
					<span class="text-sm text-error-400">{$errors.confirmPassword}</span>
				{/if}
			</div>
			<div class="text-end">
				<button type="submit" class="btn variant-filled-primary">Submit</button>
			</div>
		</form>
	</div>
	<div class="mt-4">
		<SuperDebug data={$form} display={false} />
	</div>
</div>
