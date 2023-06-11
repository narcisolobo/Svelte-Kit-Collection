import { z } from 'zod';

const PASSWORD_REGEX = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'g');

const formSchema = z
	.object({
		firstName: z.string().min(2, 'First name must be at least two characters.'),
		lastName: z.string().min(2, 'Last name must be at least two characters.'),
		email: z.string().email('Please enter a valid email address.'),
		password: z.string().regex(PASSWORD_REGEX, 'Please enter a valid password.'),
		confirmPassword: z.string(),
	})
	.refine((form) => form.confirmPassword === form.password, {
		message: 'Passwords must match.',
		path: ['confirmPassword'],
	});

export { formSchema };
