<script lang="ts">
	import TodoForm from '$components/todo-list/todo-form.svelte';
	import TodoList from '$components/todo-list/todo-list.svelte';
	import { title } from '$lib/stores/title-store';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{$title} Todo List</title>
</svelte:head>

<div class="px-4 sm:container">
	<h1 class="mb-6 text-2xl font-semibold">Todo List</h1>
</div>

<div class="px-4 sm:container">
	<TodoForm data={data.todoForm} />
	<TodoList />
</div>
