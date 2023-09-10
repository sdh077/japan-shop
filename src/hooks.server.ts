import { redirect, type Handle } from '@sveltejs/kit';
import type { HandleServerError } from '@sveltejs/kit';

const cookieOptions = {
	httpOnly: true,
	path: '/',
	secure: false,
	maxAge: 10 * 60 * 60
};

export const handle = (async ({ event, resolve }) => {
	if (event.route.id?.startsWith('/(site)/order')) {
		const id = event.cookies.get('id');
		if (!id) throw redirect(301, 'login')
	}

	const response = await resolve(event);

	return response;
}) satisfies Handle;
