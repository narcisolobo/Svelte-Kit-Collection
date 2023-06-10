<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	// import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	// import '@skeletonlabs/skeleton/themes/theme-seafoam.css';
	// import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// import '@skeletonlabs/skeleton/themes/theme-sahara.css';
	// import '@skeletonlabs/skeleton/themes/theme-vintage.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, Drawer } from '@skeletonlabs/skeleton';
	import Header from '$components/layout/header.svelte';
	import { linkItems } from '$lib/data/link-items';
	import { drawerStore } from '@skeletonlabs/skeleton';

	function handleCloseDrawer() {
		drawerStore.close();
	}
</script>

<svelte:head>
	<title>SvelteKit Assignments</title>
</svelte:head>

<AppShell slotPageFooter="bg-slate-800 px-6 py-5">
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<slot />
	<Drawer position="right">
		<nav class="list-nav p-2">
			<ul>
				{#each linkItems as linkItem}
					<li>
						<a href={linkItem.href} on:click={handleCloseDrawer}>
							<span class="badge bg-primary-500">{linkItem.icon}</span>
							<span class="flex-auto">{linkItem.label}</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</Drawer>
</AppShell>
