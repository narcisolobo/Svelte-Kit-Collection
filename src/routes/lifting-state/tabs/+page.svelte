<script lang="ts">
	import { title } from '$lib/stores/title-store';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	let tabSet: number = 0;
</script>

<svelte:head>
	<title>{$title} Tabs</title>
</svelte:head>

<div class="mx-auto w-[90%] sm:w-[70%] md:w-[50%]">
	<TabGroup regionPanel="bg-slate-100 bg-opacity-10 p-4 rounded">
		<Tab bind:group={tabSet} name="tab1" value={0}>Svelte's Reactive Approach</Tab>
		<Tab bind:group={tabSet} name="tab2" value={1}>Svelte's Small Bundle Size</Tab>
		<Tab bind:group={tabSet} name="tab3" value={2}>Svelte's Smooth Animations</Tab>
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				Svelte takes a different approach to building web applications by compiling the components
				to highly efficient imperative code. It leverages a reactive system where changes in data
				automatically update the user interface, resulting in fast and performant applications.
			{:else if tabSet === 1}
				One of the key advantages of Svelte is its small bundle size. It compiles the components at
				build time, generating optimized JavaScript code that eliminates the need for a runtime
				framework. This leads to smaller file sizes, faster load times, and improved performance.
			{:else if tabSet === 2}
				Svelte provides seamless and smooth animations out of the box. It uses a fine-grained
				reactivity system that enables you to create fluid and interactive user interfaces. With
				built-in transitions and animations, you can easily bring your components to life and create
				engaging user experiences.
			{/if}
		</svelte:fragment>
	</TabGroup>
</div>
