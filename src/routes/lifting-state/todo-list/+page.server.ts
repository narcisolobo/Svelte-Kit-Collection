import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { todoSchema } from '$lib/schemas/todo-schema';

export const load = async () => {
	const todoForm = await superValidate(todoSchema);

	return { todoForm };
};

export const actions = {
	default: async ({ request }) => {
		const todoForm = await superValidate(request, todoSchema);

		if (!todoForm.valid) {
			return fail(400, { todoForm });
		}

		return { todoForm };
	},
};
