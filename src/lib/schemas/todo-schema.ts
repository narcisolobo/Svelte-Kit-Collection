import { z } from 'zod';

export const todoSchema = z.object({
	id: z.string().optional(),
	task: z.string().min(3, 'Task must be at least three characters.'),
	isComplete: z.boolean().default(false),
});

export type TodoSchema = typeof todoSchema;
