const router = require('express').Router();

const showTalkers = require('../middlewares/showTalkers');

router.get('/', showTalkers);

module.exports = router;
