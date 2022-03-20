const tokenGenerator = require('../services/tokenGenerator');

async function genToken(req, res, next) {
  const token = tokenGenerator();
  req.headers.authorization = token;

  next();
}

module.exports = genToken;
