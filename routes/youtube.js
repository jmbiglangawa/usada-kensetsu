const express = require('express');
const { getCurrentCount, getPekoraMinecraftVideoList, getPekoraAllVideoList } = require('../controllers/youtube');
const router = express.Router();

router.get('/current-subscribers-count', function(req, res, next) {
    res.send({ count: getCurrentCount() });
});

router.get('/pekora-minecraft-video', function(req, res, next) {
    res.send({ VideoList: getPekoraMinecraftVideoList() });
});

router.get('/pekora-all-video', function(req, res, next) {
    res.send({ VideoList: getPekoraAllVideoList() });
});

module.exports = router;