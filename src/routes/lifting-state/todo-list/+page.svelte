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

<section class="space-y-4 px-4 sm:container">
	<h2 class="h2">Todo List</h2>
	<TodoForm data={data.todoForm} />
	<TodoList />
</section>
