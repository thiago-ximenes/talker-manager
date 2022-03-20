const router = require('express').Router();

const showTalkers = require('../middlewares/showTalkers');
const findTalkerById = require('../middlewares/findTalkerById');
const addTalker = require('../middlewares/addTalker');
const validateName = require('../middlewares/validateName');
const validateAge = require('../middlewares/validateAge');
const validateTalk = require('../middlewares/validateTalk');
const validateWatchedAt = require('../middlewares/validateWatchedAt');
const validateRate = require('../middlewares/validateRate');
const getToken = require('../middlewares/getToken');

router.use(getToken);

router.get('/', showTalkers);

router.get('/:id', findTalkerById);

router.post(
  '/', validateName, validateAge, validateTalk, validateWatchedAt, validateRate, addTalker,
  );

module.exports = router;
