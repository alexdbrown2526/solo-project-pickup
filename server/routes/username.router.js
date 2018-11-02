const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log(req.query)
    let mapId = req.query.id;
    pool.query(`SELECT * FROM "activity_info" WHERE "map_id"=$1;`, [mapId])
    .then(result => {
        res.send(result.rows)
        console.log(result.rows);
        
    }).catch(error => {
        console.log('error getting list of people from db', error);
        
    })
});

/**
 * POST route template
 */

router.post('/', (req, res) => {
    console.log(req.body);
    
    pool.query(`INSERT INTO "activity_info" ("person_id", "person_name", "activity", "number_of_guests", "map_id")
    VALUES($1,$2,$3,$4,$5);`, [req.user.id, req.user.username, req.body.activity, req.body.guests, req.body.venue.id])
    .then(result => {
        res.send(result.rows);
    })
    
});

module.exports = router;