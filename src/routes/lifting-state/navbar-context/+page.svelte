<script lang="ts">
	import Wrapper from '$components/navbar-context/wrapper.svelte';
	import { title } from '$lib/stores/title-store';
</script>

<svelte:head>
	<title>{$title} Navbar Context</title>
</svelte:head>

<section class="space-y-4 px-4 sm:container">
	<h2 class="h2">Navbar Context</h2>
	<Wrapper />
</section>
