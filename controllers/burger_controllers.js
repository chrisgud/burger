const express = require('express');
const router = express.Router();

const burger = require('../models/burger');

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers/', (req, res) => {
    console.log(req.body);
    let vals = [`${req.body.name}`, false];
    burger.insertOne('burgers', 'burger_name, devoured', vals,
        (result) => {
            res.json(result);
        })
});

router.put('/api/burgers/:id', (req, res) => {
    const condition = "id = " + req.params.id;
    console.log(`Condition: ${condition}`);
    burger.updateOne('burgers', `devoured = ${true}`, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;