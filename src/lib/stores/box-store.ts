import { writable } from 'svelte/store';
import type { IBox } from '$lib/types/ibox-type';

export const boxes = writable<IBox[]>([]);
