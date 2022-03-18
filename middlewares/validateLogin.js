const { isEmail } = require('validator');
const tokenGenerator = require('../services/tokenGenarator');

function validateLogin(req, res) {
  const token = tokenGenerator();
  const { email, password } = req.body;
  if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  const isEmailValid = isEmail(email);
  if (!isEmailValid) {
    return res.status(400)
      .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (!password) return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  if (password.length < 6) {
    return res.status(400)
      .json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  req.token = token;
  return res.status(200).json({ token });
}

module.exports = validateLogin;
