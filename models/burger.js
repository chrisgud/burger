const orm = require('../config/orm');

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    insertOne: (table, cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, (res) => {
            cb(res);
        });
    },
    updateOne: (table, cols, condition, cb) => {
        orm.updateOne("burgers", cols, condition, (res) => {
            cb(res);
        });
    }
}

module.exports = burger;