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
const editTalker = require('../middlewares/editTalker');
const deleteTalker = require('../middlewares/deleteTalker');
const searchTalker = require('../middlewares/searchTalker');

router.get('/', showTalkers);

router.get('/search', validateToken, searchTalker, showTalkers);

router.get('/:id', getTalkerById, (req, res) => {
  const { talkerFound } = req.talker;
  if (!talkerFound) {
      res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(200).json(talkerFound);
});

router.use(validateToken);

router.delete('/:id', getTalkerById, deleteTalker);

router.use(validateName);
router.use(validateAge);
router.use(validateTalk);
router.use(validateWatchedAt);
router.use(validateRate);

router.post('/', addTalker);

router.put('/:id', getTalkerById, editTalker);

module.exports = router;
