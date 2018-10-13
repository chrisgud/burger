const connection = require('../config/connection');

const orm = {
    selectAll: (tableInput, cb) => {
        const query = `SELECT * FROM ${tableInput};`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (table, cols, vals, cb) => {
        const queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (?, ?)`;
        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: (table, objColVals, condition, cb) => {
        const query = `UPDATE ${table} SET ${objColVals} WHERE ${condition}`;
        console.log(query);
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;