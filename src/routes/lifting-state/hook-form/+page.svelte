<script lang="ts">
	import { title } from '$lib/stores/title-store';
	let firstName = '';
	let lastName = '';
	let email = '';
	let password = '';
	let confirmPassword = '';
</script>

<svelte:head>
	<title>{$title} Hook Form</title>
</svelte:head>

<div class="px-4 sm:container">
	<h1 class="mb-6 text-center text-2xl font-semibold">Hook Form</h1>
	<div class="card mx-4 p-4 sm:mx-auto sm:w-5/6 md:w-3/4 lg:w-1/2">
		<form action="">
			<div class="mb-4">
				<label for="firstName" class="label mb-1 text-sm">First Name:</label>
				<input type="text" name="firstName" id="firstName" class="input" bind:value={firstName} />
			</div>
			<div class="mb-4">
				<label for="lastName" class="label mb-1 text-sm">Last Name:</label>
				<input type="text" name="lastName" id="lastName" class="input" bind:value={lastName} />
			</div>
			<div class="mb-4">
				<label for="email" class="label mb-1 text-sm">Email:</label>
				<input type="text" name="email" id="email" class="input" bind:value={email} />
			</div>
			<div class="mb-4">
				<label for="password" class="label mb-1 text-sm">Password:</label>
				<input type="password" name="password" id="password" class="input" bind:value={password} />
			</div>
			<div class="mb-4">
				<label for="confirmPassword" class="label mb-1 text-sm">Confirm Password:</label>
				<input
					type="password"
					name="confirmPassword"
					id="confirmPassword"
					class="input"
					bind:value={confirmPassword} />
			</div>
		</form>
	</div>
	<div class="card mx-4 mt-4 p-4 sm:mx-auto sm:w-5/6 md:w-3/4 lg:w-1/2">
		<div class="grid grid-cols-3 gap-4">
			<strong class="col-start-1">First Name:</strong>
			<p class="col-start-2">{firstName}</p>
			<strong class="col-start-1">Last Name:</strong>
			<p class="col-start-2">{lastName}</p>
			<strong class="col-start-1">Email:</strong>
			<p class="col-start-2">{email}</p>
			<strong class="col-start-1">Password:</strong>
			<p class="col-start-2">{password}</p>
			<strong class="col-start-1">Confirm Password:</strong>
			<p class="col-start-2">{confirmPassword}</p>
		</div>
	</div>
</div>
