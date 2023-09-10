import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ cookies }) => {
    const id = cookies.get('id');
    if (!id) throw redirect(301, 'login')

    return {};
}) satisfies LayoutServerLoad;

