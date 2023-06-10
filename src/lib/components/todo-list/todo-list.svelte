<script lang="ts">
	import { todos } from '$lib/stores/todo-store';
	import TodoItem from './todo-item.svelte';
</script>

<div class="card p-4 pt-3">
	<nav class="list-nav">
		<ul>
			{#each $todos as todo}
				<TodoItem {todo} />
			{/each}
		</ul>
	</nav>
</div>
