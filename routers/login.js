const router = require('express').Router();

const validateLogin = require('../middlewares/validateLogin');

router.post('/', validateLogin);

module.exports = router;
