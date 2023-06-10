<script lang="ts">
	import type { Person } from '$lib/types/person-type';
	export let person: Person;
	let age = person.age;

	function birthday() {
		age += 1;
	}
</script>

<div class="card card-hover mb-4 p-4 shadow">
	<h2 class="mb-2 text-xl font-semibold">{person.firstName} {person?.lastName ?? ''}</h2>
	<div class="mb-4 flex items-center gap-4">
		<p><strong>Age:</strong> {age}</p>
		<p><strong>Hair Color:</strong> {person.hairColor}</p>
	</div>
	<button type="button" class="btn variant-filled-primary" on:click={birthday}>
		<span>🎂</span>
		<span>Happy birthday!</span>
	</button>
</div>
