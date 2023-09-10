import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions = {
    login: async ({ cookies, request, fetch }) => {
        const data = await request.formData()
        cookies.set('id', data.get('id').toString(), {
            httpOnly: false,
            path: '/',
            secure: false,
            maxAge: 10 * 60 * 60
        })
        throw redirect(301, '/order')
    },
    logout: async ({ cookies, request, fetch }) => {
        cookies.set('id', '', {
            httpOnly: false,
            path: '/',
            secure: false,
            maxAge: 10 * 60 * 60
        })
        throw redirect(301, '/login')
    }
}