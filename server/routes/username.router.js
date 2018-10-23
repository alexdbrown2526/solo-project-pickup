const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "person";`)
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

});

module.exports = router;