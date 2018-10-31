const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



/**
 * POST route template
 */
router.post('/', (req, res) => {
    pool.query(`INSERT INTO "location" ("latitude", "longitude") VALUES ($1,$2)`,
    [req.body.latitude, req.body.longitude] ,)
});

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "location";`)
    .then(result => {
        res.send(result.rows)
        console.log(result.rows);
        
    }).catch(error => {
        console.log('error getting locations', error);
        
    })
});

module.exports = router;

