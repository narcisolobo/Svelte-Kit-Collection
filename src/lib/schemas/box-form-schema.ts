import { z } from 'zod';
const HEXCODE_REGEX = new RegExp(/^#?[0-9A-Fa-f]{6}$/, 'g');

const boxSchema = z.object({
	id: z.string().optional(),
	width: z.number().min(50),
	color: z.string().regex(HEXCODE_REGEX).default('#663399'),
});

export { boxSchema };
