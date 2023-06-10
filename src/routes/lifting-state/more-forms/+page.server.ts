import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { formSchema } from '$lib/utils/form-schema';

export const load = async () => {
	// Server API:
	const form = await superValidate(formSchema);

	// Always return { form } in load and form actions.
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, formSchema);
		console.log('POST', form);

		if (!form.valid) {
			return fail(400, { form });
		}

		return { form };
	},
};
