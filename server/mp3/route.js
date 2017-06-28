const express = require ('express');
const mp3 = require('./mp3.controller.js')();
const router = express.Router();


router.get('/api/v1/read-songs', mp3.readSongs);
router.get('/api/v1/:name', mp3.createStream);


module.exports = router;
