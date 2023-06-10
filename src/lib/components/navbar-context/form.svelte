<script lang="ts">
	import { username } from '$lib/stores/username-store';
</script>

<form method="POST" class="w-1/2">
	<div class="input-group-divider input-group grid-cols-[auto_1fr_auto]">
		<div class="input-group-shim">
			<iconify-icon icon="basil:user-solid" class="text-3xl" />
		</div>
		<input type="text" placeholder="Username" bind:value={$username} />
	</div>
</form>
