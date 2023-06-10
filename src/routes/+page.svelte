<script lang="ts">
	import { title } from '$lib/stores/title-store';
	import { linkItems } from '$lib/data/link-items';
</script>

<svelte:head>
	<title>{$title}</title>
</svelte:head>
<div class="px-4 sm:container">
	<h1 class="mb-6 text-2xl font-semibold">SvelteKit Assignments</h1>
	<div class="card mx-4 mt-4 p-4 sm:mx-auto sm:w-5/6 md:w-3/4 lg:w-1/2">
		<nav class="list-nav p-2">
			<ul>
				{#each linkItems as linkItem}
					<li>
						<a href={linkItem.href}>
							<span class="badge bg-primary-500">{linkItem.icon}</span>
							<span class="flex-auto">{linkItem.label}</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</div>
