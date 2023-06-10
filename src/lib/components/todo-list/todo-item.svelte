<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import type { ITodo } from '$lib/types/itodo-type';
	import { todos } from '$lib/stores/todo-store';
	import { fade } from 'svelte/transition';

	export let todo: ITodo;

	const confirmDelete: ModalSettings = {
		type: 'confirm',
		title: 'Confirm Delete',
		body: 'Are you sure you wish to delete this todo?',
		response: (r: boolean) => {
			if (r) {
				todos.update((existingTodos) => {
					const index = existingTodos.findIndex((t) => t.id === todo.id);
					if (index !== -1) {
						existingTodos.splice(index, 1);
					}
					return existingTodos;
				});
			}
		},
	};

	const toggleComplete = () => {
		todos.update((existingTodos) => {
			return existingTodos.map((t) => {
				if (t.id === todo.id) {
					t.isComplete = !t.isComplete;
				}
				return t;
			});
		});
	};

	const handleDelete = () => {
		modalStore.trigger(confirmDelete);
	};
</script>

<li
	class="my-2 flex items-center gap-3 rounded-xl p-3 hover:bg-surface-active-token"
	transition:fade>
	<span class="badge bg-transparent p-2">
		<input
			class="checkbox"
			type="checkbox"
			id="isComplete"
			name="isComplete"
			checked={todo.isComplete}
			on:change={toggleComplete} />
	</span>
	<span class={`flex-auto ${todo.isComplete ? 'text-neutral-500' : ''}`}>{todo.task}</span>
	<button type="button" class="btn-icon variant-filled-surface" on:click={handleDelete}
		><iconify-icon icon="mdi:trash" class="text-xl" />
	</button>
</li>
