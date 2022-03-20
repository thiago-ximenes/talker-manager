const router = require('express').Router();

const validateLogin = require('../middlewares/validateLogin');
const genToken = require('../middlewares/genToken');

router.post('/', validateLogin, genToken, (req, res) => {
  const token = req.headers.authorization;
  return res.status(200).json({ token });
});

module.exports = router;
