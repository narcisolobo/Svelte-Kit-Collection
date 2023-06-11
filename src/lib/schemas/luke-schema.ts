import { z } from 'zod';

const lukeSchema = z.object({
	resource: z.union([z.literal('people'), z.literal('planets')]),
	id: z.number().min(1, 'Please enter an ID number.'),
});

export { lukeSchema };
export type LukeSchema = typeof lukeSchema;
