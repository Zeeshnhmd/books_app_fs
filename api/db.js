import mysql from 'mysql';

export const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: process.env.PASSWORD,
	database: 'booksapp',
});

db.connect((err) => {
	if (err) {
		console.error('Error connecting to MySQL:', err);
	} else {
		console.log('Connected to MySQL');
	}
});
