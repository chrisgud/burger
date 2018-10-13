const mysql = require('mysql');

const connection = mysql.createConnection({
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