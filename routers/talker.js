const router = require('express').Router();

const showTalkers = require('../middlewares/showTalkers');
const findTalkerById = require('../middlewares/findTalkerById');

router.get('/', showTalkers);

router.get('/:id', findTalkerById);

// router.post('/', )

module.exports = router;
