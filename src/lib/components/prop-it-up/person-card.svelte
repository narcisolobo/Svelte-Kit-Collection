<script lang="ts">
	import type { Person } from '$lib/types/person-type';
	export let person: Person;
</script>

<div class="card card-hover mb-4 p-4 shadow">
	<h2 class="mb-2 text-xl font-semibold">{person.firstName} {person?.lastName ?? ''}</h2>
	<div class="flex items-center gap-4">
		<p><strong>Age:</strong> {person.age}</p>
		<p><strong>Hair Color:</strong> {person.hairColor}</p>
	</div>
</div>
