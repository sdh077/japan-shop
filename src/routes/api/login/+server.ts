import pg from 'pg';
import { json } from '@sveltejs/kit';

import { POSTGRES_URL } from '$env/static/private';

export async function POST({ request, params, url }) {
    try {

        const data = await request.json()
        let { Client } = pg;
        const client = new Client({
            connectionString: POSTGRES_URL + '?sslmode=require'
        });
        await client.connect();
        const res = await client.query(`SELECT * FROM user`);
        await client.end();
        Client = null;
        return json(res.rows);
    } catch (e) { return }
}
