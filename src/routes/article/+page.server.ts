import type { PageServerLoad } from "./$types";

export const load = (async ({ cookies, fetch, url }) => {
    return {
        articles: [
            {
                title: 'Sed quia non numquam',
                sub: 'UI / UX',
                category: 'bootstrap'
            },
            {
                title: 'Ogólnie znana teza',
                sub: 'Javascript',
                category: 'figma'
            },
            {
                title: 'El punto de',
                sub: 'Business, Marketing',
                category: 'bootstrap'
            }, {
                title: 'Sed quia non numquam',
                sub: 'UI / UX',
                category: 'figma'
            }, {
                title: 'Excepteur sint occaecat',
                sub: 'Product Design',
                category: 'javascript'
            }, {
                title: 'Sed quia non numquam',
                sub: 'UI / UX',
                category: 'javascript'
            }, {
                title: 'Product Design',
                sub: 'Motion - Print',
                category: 'javascript'
            }, {
                title: ' 3D Ninja',
                sub: 'UI / UX',
                category: 'bootstrap'
            }]
    }
}) satisfies PageServerLoad;

