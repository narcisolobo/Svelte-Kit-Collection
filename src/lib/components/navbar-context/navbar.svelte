<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { username } from '$lib/stores/username-store';
</script>

<AppBar background="bg-variant-filled-surface">
	<svelte:fragment slot="lead">Navbar Context</svelte:fragment>
	<svelte:fragment slot="trail">Hi {$username}!</svelte:fragment>
</AppBar>
