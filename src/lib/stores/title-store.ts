import { readable } from 'svelte/store';

export const title = readable('SvelteKit Assignments -', function start(set) {
	return function stop() {};
});
