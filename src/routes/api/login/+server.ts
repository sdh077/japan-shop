import pg from 'pg';
import { json } from '@sveltejs/kit';
import { pool } from '$lib/db'


export async function POST({ request, params, url }) {
    const body = await request.json();
    const connection = await pool.getConnection();
    const [user] = await connection.query(
        `
            SELECT * FROM user
            WHERE id = '${body.id}' AND password = '${body.password}'
            ;
            
        `);
    connection.release();
    return json({ result: !!user.length, user: user[0] });
}
