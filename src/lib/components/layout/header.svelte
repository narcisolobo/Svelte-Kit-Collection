<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import GiAbstract107 from 'svelte-icons/gi/GiAbstract107.svelte';
	import FaHamburger from 'svelte-icons/fa/FaHamburger.svelte';
	import { drawerStore } from '@skeletonlabs/skeleton';

	const handleHamburger = () => {
		drawerStore.open();
	};
</script>

<AppBar padding={'px-4 sm:px-8 py-5 mb-6'} shadow="shadow">
	<svelte:fragment slot="lead">
		<div class="h-10 w-10">
			<a href="/">
				<GiAbstract107 />
			</a>
		</div>
	</svelte:fragment>
	<h1 class="hidden text-2xl font-semibold sm:block">SK Assignments</h1>
	<svelte:fragment slot="trail">
		<div class="flex items-center gap-4">
			<LightSwitch />
			<button type="button" class="btn-icon h-8 w-8" on:click={handleHamburger}>
				<FaHamburger />
			</button>
		</div>
	</svelte:fragment>
</AppBar>
