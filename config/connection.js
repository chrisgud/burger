const mysql = require('mysql');

const connection

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'chris',
    password: 'mypass',
    database: 'burger_db',
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected.  ID=${connection.threadId}`);
})

module.exports = connection;