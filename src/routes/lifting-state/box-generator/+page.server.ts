import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { boxSchema } from '$lib/utils/box-form-schema';
import type { IBox } from '$lib/types/ibox-type.js';

const boxes: IBox[] = [];

export const load = async () => {
	const boxForm = await superValidate(boxSchema);

	return { boxForm, boxes };
};

export const actions = {
	default: async ({ request }) => {
		const boxForm = await superValidate(request, boxSchema);

		if (!boxForm.valid) {
			return fail(400, { boxForm });
		}

		const newBox: IBox = {
			id: crypto.randomUUID(),
			width: boxForm.data.width,
			color: boxForm.data.color,
		};

		boxes.unshift(newBox);

		return { boxForm };
	},
};
