<script lang="ts">
	import type { SuperValidated } from 'sveltekit-superforms';
	import type { TodoSchema } from '$lib/schemas/todo-schema';
	import { superForm } from 'sveltekit-superforms/client';
	import type { ITodo } from '$lib/types/itodo-type';
	import { todos } from '$lib/stores/todo-store';

	export let data: SuperValidated<TodoSchema>;

	const {
		form: todoForm,
		errors,
		enhance,
	} = superForm(data, {
		resetForm: true,
		onUpdated({ form }) {
			if (form.valid) {
				const newTodo: ITodo = {
					id: crypto.randomUUID(),
					task: form.data.task,
					isComplete: form.data.isComplete,
				};
				todos.update((previousTodos) => previousTodos.concat(newTodo));
			}
		},
	});
</script>

<div class="card mb-4 p-8">
	<form method="POST" use:enhance>
		<div class="input-group-divider input-group grid-cols-[auto_1fr_auto]">
			<div class="input-group-shim">Task:</div>
			<input
				type="text"
				name="task"
				id="task"
				data-invalid={$errors.task}
				bind:value={$todoForm.task} />
			<button type="submit" class="variant-filled-secondary">Add Todo</button>
		</div>
		{#if $errors.task}
			<span class="mt-2 block text-sm text-error-800 dark:text-error-400">{$errors.task}</span>
		{/if}
	</form>
</div>
