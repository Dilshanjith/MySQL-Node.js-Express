import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

export async function getNotes() {
    const [rows] = await pool.query("SELECT * FROM notes");
    return rows;
}

export async function getNote(id) {
    const [rows] = await pool.query("SELECT * FROM notes WHERE id = ?", [id]);
    return rows.length > 0 ? rows[0] : null; // Return a single note or null if not found
}

export async function createNote(title, contents) {
    const [result] = await pool.query(
        "INSERT INTO notes (title, contents) VALUES (?, ?)",
        [title, contents]
    );
    if (result.insertId) {
        return getNote(result.insertId); // Return the newly created note
    }
    throw new Error("Failed to create note");
}
