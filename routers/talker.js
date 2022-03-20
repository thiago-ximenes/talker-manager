const router = require('express').Router();

const showTalkers = require('../middlewares/showTalkers');
const findTalkerById = require('../middlewares/findTalkerById');
const addTalker = require('../middlewares/addTalker');
const validateName = require('../middlewares/validateName');
const validateAge = require('../middlewares/validateAge');
const validateTalk = require('../middlewares/validateTalk');
const validateWatchedAt = require('../middlewares/validateWatchedAt');
const validateRate = require('../middlewares/validateRate');
const validateToken = require('../middlewares/validateToken');

router.get('/', showTalkers);

router.get('/:id', findTalkerById);

router.post(
  '/',
  validateToken,
  validateName, validateAge, validateTalk, validateWatchedAt, validateRate, addTalker,
  );

module.exports = router;
