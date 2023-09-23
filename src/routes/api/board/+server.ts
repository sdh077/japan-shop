import pg from 'pg';
import { json } from '@sveltejs/kit';
import { pool } from '$lib/db'


export async function GET({ request, params, url }) {
    const type = url.searchParams.get('type')
    const connection = await pool.getConnection();
    const [boards] = await connection.query(
        `
            SELECT * FROM board
            ${type ? `WHERE type = ${type}` : ''}
            ;
            
        `);
    connection.release();
    return json(boards);
}
