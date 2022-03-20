const router = require('express').Router();

const showTalkers = require('../middlewares/showTalkers');
const getTalkerById = require('../middlewares/getTalkerById');
const addTalker = require('../middlewares/addTalker');
const validateName = require('../middlewares/validateName');
const validateAge = require('../middlewares/validateAge');
const validateTalk = require('../middlewares/validateTalk');
const validateWatchedAt = require('../middlewares/validateWatchedAt');
const validateRate = require('../middlewares/validateRate');
const validateToken = require('../middlewares/validateToken');

router.get('/', showTalkers);

router.get('/:id', getTalkerById, (req, res) => {
  const { talker } = req;
  if (!talker) {
      res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(200).json(talker);
});

router.post(
  '/',
  validateToken,
  validateName, validateAge, validateTalk, validateWatchedAt, validateRate, addTalker,
);

router.put('/:id', getTalkerById);

module.exports = router;
