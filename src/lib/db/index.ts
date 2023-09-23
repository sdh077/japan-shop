import mysql from "mysql2/promise";

export const pool = mysql.createPool({
    host: '43.201.77.254',
    user: 'root',
    password: 'user',
    port: 3306,
    database: 'faabs',
    multipleStatements: true // allows to use multiple statements
});