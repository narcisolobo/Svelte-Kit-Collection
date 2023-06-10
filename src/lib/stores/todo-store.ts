import { writable } from 'svelte/store';
import type { ITodo } from '$lib/types/itodo-type';

export const todos = writable<ITodo[]>([]);
