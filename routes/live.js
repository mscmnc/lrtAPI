const express = require('express');

const liveController = require('../controllers/live');

const router = express.Router();

router.get('/ltv', liveController.getLiveLTV);
router.get('/ltv2', liveController.getLiveLTV2);
router.get('/world', liveController.getLiveWORLD);
router.get('/lr', liveController.getLiveLR);
router.get('/klasika', liveController.getLiveKlasika);
router.get('/opus', liveController.getLiveOpus);

module.exports = router;